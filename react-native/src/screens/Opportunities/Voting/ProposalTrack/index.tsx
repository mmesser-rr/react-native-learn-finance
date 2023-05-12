import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import { IProposalTrackScreenProps } from 'src/types/opportunitiesRouterTypes';
import ProposalModal from '../ProposalModal';
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import Loading from 'src/components/common/Loading';
import infoIcon from "src/assets/icons/info-icon.png";
import alarmClock from "src/assets/icons/alarm-clock.png";
import communityIcon from "src/assets/icons/community-icon.png";
import CloseIcon from "src/assets/icons/close-white.svg";
import learningIcon from "src/assets/icons/learning-icon.png";
import professionalIcon from "src/assets/icons/professional-icon.png";
import featureIcon from "src/assets/icons/feature-icon.png";
import stopIcon from "src/assets/icons/stop-icon.png";
import { ProposalTrackType } from "src/types/API";
import { setTrack, getLatestProposalSession, findOwnProposal } from 'src/store/slices/proposal.slice';
import { useAppDispatch, useAppSelector } from "src/store";
import styles from './styles'

const ProposalTrack: React.FC<IProposalTrackScreenProps> = ({navigation, route}) => {
    const dispatch = useAppDispatch()
    const {proposalTimeExpired, alreadyProposalMade} = useAppSelector(o => o.proposal)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getLatestProposalSession()).then(e => {
            if (proposalTimeExpired) {
                setLoading(false)
            } else {
                dispatch(findOwnProposal()).then(f => {
                    setLoading(false)
                })
            }
        })
    }, [])

    const onPressGoBack = () => {
        navigation.goBack()
    }

    const onPressIcon = () => {
        console.log('press info')
        setVisible(true)
    }

    const onPressCard = (v: ProposalTrackType) => {
        console.log('press card ', v)
        dispatch(setTrack(v))
        navigation.navigate('ActionVerbScreen')
    }

    const closeModal = () => {
        setVisible(false)
    }

    const onPressClose = () => {
        navigation.goBack()
    }

    return (
        <View style={{flex: 1}}>
            {(alreadyProposalMade || proposalTimeExpired || visible) && <View style={styles.blurView}/>}
            <ProposalModal 
                visible={visible}
                closeModal={closeModal}
            />
            
            {proposalTimeExpired && <View style={styles.disableLayer}>
                <View style={styles.diableContainer}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <Image source={alarmClock}/>
                    <Text type="Body/Medium" variant='white' style={styles.alarmText}>Oh No!</Text>
                    <Text type="Body/Small" variant='white'>The proposal window is now closed</Text>
                </View>
            </View>}
            
            {alreadyProposalMade && <View style={styles.disableLayer}>
                <View style={styles.diableContainer}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <Image source={stopIcon}/>
                    <Text type="Body/Medium" variant='white' style={styles.alarmText}>Hey again! </Text>
                    <Text type="Body/Small" variant='white'>Looks like you already submitted a proposal</Text>
                </View>
            </View>}

            <AppLayout>
                <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
                <View style={styles.header}>
                    <View>
                        <Text type="Headline/Medium" variant="white">Choose your</Text>
                        <View style={styles.headerText}>
                            <Text type="Headline/Medium" variant="white" style={styles.proposalText}>Proposal</Text>
                            <Text type="Headline/Medium" variant="red">Track</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onPressIcon}>
                        <Image source={infoIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
                <Text type="Body/Medium" variant="white">I'm interested in improving...</Text>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalTrackType.COMMUNITY)}>
                        <Image source={communityIcon} resizeMode={'contain'} style={styles.imageIcon} />
                        <Text type="Body/Medium" variant="white" style={styles.cardText1}>Community</Text>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>Propose new community building activities and activations</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalTrackType.LEARNING)}>
                        <Image source={learningIcon} resizeMode={'contain'} style={styles.imageIcon}/>
                        <Text type="Body/Medium" variant="white" style={styles.cardText1}>Learning</Text>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>Propose new learning topics and experiences</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalTrackType.PROFESSIONAL)}>
                        <Image source={professionalIcon} resizeMode={'contain'} style={styles.imageIcon}/>
                        <Text type="Body/Medium" variant="white" style={styles.cardText1}>Professional</Text>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>Propose professional development and growth opportunities</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalTrackType.FEATURES)}>
                        <Image source={featureIcon} resizeMode={'contain'} style={styles.imageIcon}/>
                        <Text type="Body/Medium" variant="white" style={styles.cardText1}>Features</Text>
                        <Text type="Body/Small" variant="white" style={styles.cardText2}>Propose new features, functionalities and tools</Text>
                    </TouchableOpacity>
                </View>
            </AppLayout>

            {loading && <Loading />}
        </View>
    )
};

export default ProposalTrack;