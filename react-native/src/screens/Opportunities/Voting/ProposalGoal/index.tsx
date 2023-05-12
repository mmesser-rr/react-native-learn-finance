import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, ScrollView } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import TextInput from 'src/components/common/TextInput';
import Button from "src/components/common/Button";
import { IProposalGoalScreenProps } from 'src/types/opportunitiesRouterTypes';
import ProposalModal from '../ProposalModal';
import infoIcon from "src/assets/icons/info-icon.png";
import ProposalCard from '../ProposalCard';
import { setDesiredGoal } from 'src/store/slices/proposal.slice';
import { useAppDispatch, useAppSelector } from "src/store";
import styles from './styles'

const ProposalGoal: React.FC<IProposalGoalScreenProps> = ({navigation, route}) => {
    const dispatch = useAppDispatch()
    const [goal, setGoal] = useState("")

    const [visible, setVisible] = useState(false)
    const { track } = useAppSelector(o => o.proposal)
    const [inputErr, setInputErr] = useState(false)
    const [cardSmall, setCardSmall] = useState(false)

    const onPressGoBack = () => {
        navigation.goBack()
    }

    const onPressIcon = () => {
        console.log('press icon')
        setVisible(true)
    }

    const onChange = (v: string) => {
        setGoal(v)
        setInputErr(false)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const onPressNext = () => {
        if (!goal) {
            setInputErr(true)
            return
        }
        dispatch(setDesiredGoal(goal))
        navigation.navigate('SubmitProposalScreen')
    }

    const onInputFocus = () => {
        console.log('input focus')
        setCardSmall(true)
    }

    const onInpuBlur = () => {
        console.log('input blur')
        setCardSmall(false)
    }

    return (
        <View style={{flex: 1}}>
            {visible && <View style={styles.blurView}/>}
            <ProposalModal 
                visible={visible}
                closeModal={closeModal}
            />
            <AppLayout>
                <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text type="Headline/Medium" variant="white" style={styles.createText}>Enter Desired</Text>
                        <Text type="Headline/Medium" variant="red">Goal</Text>
                    </View>
                    <TouchableOpacity onPress={onPressIcon}>
                        <Image source={infoIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <ProposalCard type={track} cardSmall={cardSmall}/>
                    <TextInput 
                            label="In order to... Enter the desired goal of your idea"
                            onChangeText={onChange}
                            multiline={true}
                            errorMessage="Please Input Desired Goal"
                            showErrorMessage={inputErr}
                            value={goal}
                            onFocus={onInputFocus}
                            onBlur={onInpuBlur}
                        />
                </ScrollView>                

                <Button variant="red" onPress={onPressNext} actionStyle={styles.nextBtn}>
                    <Text type="Body/Large">Next</Text>
                </Button>
            </AppLayout>
        </View>
    )
};

export default ProposalGoal;