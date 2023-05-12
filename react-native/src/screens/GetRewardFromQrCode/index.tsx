import React, { useEffect, useState } from 'react';
import { GraphQLResult } from "@aws-amplify/api";
import { View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import AnimatedNumbers from 'react-native-animated-numbers';
import { Text } from 'src/components/common/Texts';
import Button from "src/components/common/Button";
import { GetRewardFromQrCodeProps } from 'src/types/routerTypes';
import AppLayout from 'src/components/layout/AppLayout';
import { Athlete, ListQRCodesQuery, GetAthleteQuery, GetAthleteQueryVariables, UpdateAthleteActivityMutationVariables, 
    UpdateAthleteActivityMutation, UpdateAthleteMutationVariables, UpdateAthleteMutation, UpdateQRCodeMutationVariables, 
    UpdateQRCodeMutation } from "src/types/API";
import { updateRewardData } from "src/store/slices/qrCodes.slice";
import { updateWealthBalance } from 'src/store/slices/user.slice';
import { QRCode, RewardData } from "src/types/common";
import styles from './styles';
import { boundObject, graphqlApi } from "src/utils/functions";
import { listQRCodes, getAthlete } from "src/graphql/queries";
import {
    updateAthleteActivity as UPDATE_ATHLETE_ACTIVITY_MUTATION,
    updateAthlete,
    updateQRCode
} from "src/graphql/mutations";
import NavigationService from 'src/navigation/NavigationService';

import RewardCoin from 'src/assets/icons/reward_coin.png';
import RewardConFirm from 'src/assets/icons/reward_confirm.png';
import NoReward from 'src/assets/icons/no_reward.png';
import CloseIcon from 'src/assets/icons/close-gray.png';
import { useAppDispatch, useAppSelector } from 'src/store/index';
import WealthIcon from 'src/assets/icons/wealth.png';
import textStyles from 'src/components/common/Texts/styles';

type RewardQrCode = {
    id: string,
    itemOrEventName: string
}

const GetRewardFromQrCode: React.FC<GetRewardFromQrCodeProps> = ({ route, navigation }) => {
    const params = route.params || {};
    const { userId, qrcodeId } = params;
    const [codeData, setCodeData] = useState<QRCode>()
    const [loading, setLoading] = useState<boolean>(false)
    const [earnText, setEarnText] = useState<String>('')
    const [isEvent, setIsEvent] = useState(false)
    const [isValidQrCode, setIsValidQrCode] = useState(true)

    const [itemOrEventName, setItemOrEventName] = useState('')
    const [currentWealth, setCurrentWealth] = useState(0)
    const [rewardedQrCodes, setRewardedQrCodes] = useState<RewardQrCode[]>([])
    const [wealthBalance, setWealthBalance] = useState(0)
    const [confirmed, setConfirmed] = useState(false)
    const user = useAppSelector(o => o.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('------------component did mount')

        setIsValidQrCode(true)
        setConfirmed(false)
        const loadQrCodes = async () => {
            const response = await graphqlApi(listQRCodes) as GraphQLResult<ListQRCodesQuery>;
            if (response.data?.listQRCodes?.items && response.data?.listQRCodes?.items.length > 0) {
                const found = response.data?.listQRCodes?.items.find(e => e?.id == qrcodeId)
                const temp = {
                    id: found?.id,
                    learnId: found?.learnId,
                    depositNum: found?.depositNum,
                    wealthPointAmount: found?.wealthPointAmount,
                    rewardAmount: found?.rewardAmount,
                    itemName: found?.itemName,
                    eventName: found?.eventName,
                    usedCount: found?.usedCount,
                    limitCount: found?.limitCount
                } as QRCode

                if (found?.usedCount === found?.limitCount) {
                    setIsValidQrCode(false)
                }

                console.log('qrcode = ', temp)
                found && setCodeData(temp)

                let text = ''
                if (found?.itemName) {
                    text = `You have earned ${found?.wealthPointAmount} $WEALTH + ${found?.itemName}!`
                    setItemOrEventName(found.itemName)
                    setWealthBalance(found?.wealthPointAmount || 0)
                    setIsEvent(false)
                } else if (found?.eventName) {
                    text = `Your participation in ${found?.eventName} + ${found?.rewardAmount} $WEALTH`
                    setItemOrEventName(found.eventName)
                    setWealthBalance(found?.rewardAmount || 0)
                    setIsEvent(true)
                }

                setEarnText(text)
            }
        }
        const loadAthlete = async () => {
            const id = userId

            const athleteResponse = await graphqlApi(
                getAthlete,
                { id } as GetAthleteQueryVariables
            ) as GraphQLResult<GetAthleteQuery>;

            const athlete = athleteResponse.data?.getAthlete as Athlete | undefined;

            if (athlete?.rewardedQrCodes && athlete.rewardedQrCodes.length > 0) {
                setRewardedQrCodes(athlete.rewardedQrCodes as RewardQrCode[])
                const found = athlete.rewardedQrCodes.find(e => e?.id === qrcodeId)
                found && setIsValidQrCode(false)
            }
            setCurrentWealth(athlete?.activity?.wealthBalance || 0)
            console.log('athlete = ', athlete?.rewardedQrCodes, athlete?.activity?.wealthBalance)
        }

        setLoading(true)
        loadQrCodes()
        loadAthlete()
        setLoading(false)
    }, [])

    useEffect(() => {
        console.log('----------component receive props')

        setIsValidQrCode(true)
        setConfirmed(false)
        const loadQrCodes = async () => {
            const response = await graphqlApi(listQRCodes) as GraphQLResult<ListQRCodesQuery>;
            if (response.data?.listQRCodes?.items && response.data?.listQRCodes?.items.length > 0) {
                const found = response.data?.listQRCodes?.items.find(e => e?.id == qrcodeId)
                const temp = {
                    id: found?.id,
                    learnId: found?.learnId,
                    depositNum: found?.depositNum,
                    wealthPointAmount: found?.wealthPointAmount,
                    rewardAmount: found?.rewardAmount,
                    itemName: found?.itemName,
                    eventName: found?.eventName,
                    usedCount: found?.usedCount,
                    limitCount: found?.limitCount
                } as QRCode

                if (found?.usedCount === found?.limitCount) {
                    setIsValidQrCode(false)
                }

                found && setCodeData(temp)

                let text = ''
                if (found?.itemName) {
                    text = `You have earned ${found?.wealthPointAmount} $WEALTH + ${found?.itemName}!`
                    setItemOrEventName(found.itemName)
                    setWealthBalance(found.wealthPointAmount || 0)
                    setIsEvent(false)
                } else if (found?.eventName) {
                    text = `Your participation in ${found?.eventName} + ${found?.rewardAmount}WEALTH`
                    setItemOrEventName(found.eventName)
                    setWealthBalance(found.rewardAmount || 0)
                    setIsEvent(true)
                }

                setEarnText(text)
            }
        }
        const loadAthlete = async () => {
            const id = userId

            const athleteResponse = await graphqlApi(
                getAthlete,
                { id } as GetAthleteQueryVariables
            ) as GraphQLResult<GetAthleteQuery>;

            const athlete = athleteResponse.data?.getAthlete as Athlete | undefined;

            if (athlete?.rewardedQrCodes && athlete.rewardedQrCodes.length > 0) {
                setRewardedQrCodes(athlete.rewardedQrCodes as RewardQrCode[])
                const found = athlete.rewardedQrCodes.find(e => e?.id === qrcodeId)
                found && setIsValidQrCode(false)
            }
            setCurrentWealth(athlete?.activity?.wealthBalance || 0)
        }

        setLoading(true)
        loadQrCodes()
        loadAthlete()
        setLoading(false)
    }, [route])

    const onConfirm = async () => {
        if (user.user) {
            dispatch(updateWealthBalance({ wealthBalance: currentWealth + wealthBalance }));
        } else {
            //update wealth       
            try {
                const wResponse = await graphqlApi(
                    UPDATE_ATHLETE_ACTIVITY_MUTATION, {
                        input: {
                            id: userId,
                            wealthBalance: currentWealth + wealthBalance
                        }
                    } as UpdateAthleteActivityMutationVariables
                ) as GraphQLResult<UpdateAthleteActivityMutation>;
            } catch(err) {
                console.log('update athletes wealth error: ', err)
            }
        }

        setCurrentWealth(currentWealth + wealthBalance)
        // update user
        try {
            const uResponse = await graphqlApi(
                updateAthlete, {
                    input: {
                        id: userId,
                        rewardedQrCodes: [...rewardedQrCodes, { id: qrcodeId, itemOrEventName: itemOrEventName }]
                    }
                } as UpdateAthleteMutationVariables
            ) as GraphQLResult<UpdateAthleteMutation>;
        } catch(err) {
            console.log('update reward qrcodes error: ', err)
        }

        // update qrcode
        let usedCount: number = codeData?.usedCount || 0
        try {
            const qResponse = await graphqlApi(
                updateQRCode, {
                    input: {
                        id: qrcodeId,
                        usedCount: ++usedCount
                    }
                } as UpdateQRCodeMutationVariables
            ) as GraphQLResult<UpdateQRCodeMutation>;
        } catch(err) {
            console.log('update qrcode id and count error: ', err)
        }
        setConfirmed(true)
    }

    const onClose = () => {
        navigateToMain(true);
    }

    const onExit = () => {
        navigateToMain(false);
    }

    const navigateToMain = async (isReward: boolean) => {
        // if (isReward) {
        //     const rewardData = {
        //         isEvent,
        //         isValidQrCode,
        //         wealthBalance: currentWealth + wealthBalance,
        //         message: earnText,
        //     } as RewardData
        //     dispatch(updateRewardData(rewardData))
        // }
        if (user.user) {
            navigation.navigate('OpportunitiesStack');
        } else {
            navigation.navigate('UserLoginStack');
        }
    }

    const clearData = async () => {
        // clear user
        const uResponse = await graphqlApi(
            updateAthlete, {
                input: {
                    id: userId,
                    rewardedQrCodes: []
                }
            } as UpdateAthleteMutationVariables
        ) as GraphQLResult<UpdateAthleteMutation>;

        // clear qrcode
        const qResponse = await graphqlApi(
            updateQRCode, {
                input: {
                    id: qrcodeId,
                    usedCount: 0
                }
            } as UpdateQRCodeMutationVariables
        ) as GraphQLResult<UpdateQRCodeMutation>;

        setIsValidQrCode(true)
        setRewardedQrCodes([])
    }

    return (
        <AppLayout>

            <View style={styles.header}>
                <View style={styles.wealthBalance}>
                    <Image source={WealthIcon} style={styles.wealthIcon} />
                    <AnimatedNumbers animateToNumber={currentWealth} fontStyle={textStyles.largeBody} />
                </View>
            </View>

            {!loading ?
                <View style={styles.container}>
                    <TouchableOpacity onPress={onExit} style={styles.exitIcon}>
                        <Image source={CloseIcon} />
                    </TouchableOpacity>
                    <View style={styles.mainContainer}>
                        {isValidQrCode ?
                            <>
                                {!isEvent && <>
                                    <Image source={RewardCoin} resizeMode="contain" />
                                    <Text type='Headline/Medium' style={styles.mediumTop}>Congratulations!</Text>
                                    <Text type='Body/Medium' style={styles.smallTop}>{earnText}</Text>
                                    {!confirmed ? <Button variant="red" actionStyle={styles.btnStyle} onPress={onConfirm} >
                                        <Text type="Body/Large">
                                            Collect
                                        </Text>
                                    </Button> :
                                    <Button variant="red" actionStyle={styles.btnStyle} onPress={() => navigateToMain(false)} >
                                        <Text type="Body/Large">
                                            Close
                                        </Text>
                                    </Button>
                                    }
                                </>}
                                {isEvent && <>
                                    <Image source={RewardConFirm} resizeMode="contain" />
                                    <Text type='Headline/Medium' style={styles.mediumTop}>Please Confirm</Text>
                                    <Text type='Body/Medium' style={styles.smallTop}>{earnText}</Text>
                                    {!confirmed ? <Button variant="red" actionStyle={styles.btnStyle} onPress={onConfirm} >
                                        <Text type="Body/Large">
                                            Confirm
                                        </Text>
                                    </Button> :
                                    <Button variant="red" actionStyle={styles.btnStyle} onPress={() => navigateToMain(false)} >
                                        <Text type="Body/Large">
                                            Close
                                        </Text>
                                    </Button>
                                    }
                                </>}
                            </> :
                            <>
                                <Image source={NoReward} resizeMode="contain" />
                                <Text type='Headline/Medium' style={styles.mediumTop}>Oh No!</Text>
                                <Text type='Body/Medium' style={styles.smallTop}>The QR code has already been collected</Text>
                                <Button variant="red" actionStyle={styles.btnStyle} onPress={onClose}>
                                    <Text type="Body/Large">Close</Text>
                                </Button>
                            </>
                        }
                        {/* <Button variant='red' onPress={clearData}>
                            <Text type="Body/Large">clear</Text>
                        </Button> */}
                    </View>
                </View> :
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            }
        </AppLayout>
    )
};


export default GetRewardFromQrCode;