import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import TextInput from 'src/components/common/TextInput';
import { IActionVerbScreenProps } from 'src/types/opportunitiesRouterTypes';
import ProposalModal from '../ProposalModal';
import { ProposalActionVerbType } from "src/types/API";
import infoIcon from "src/assets/icons/info-icon.png";
import { setActionVerb } from 'src/store/slices/proposal.slice';
import { useDispatch } from 'react-redux';
import styles from './styles'

const ActionVerb: React.FC<IActionVerbScreenProps> = ({navigation, route}) => {
    const [verb, setVerb] = useState("")
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const onPressGoBack = () => {
        console.log('press go back')
        navigation.goBack()
    }

    const onPressIcon = () => {
        console.log('press icon')
        setVisible(true)
    }

    const onChange = (v: string) => {
        setVerb(v)
    }

    const onPressCard = (v: ProposalActionVerbType) => {
        console.log('press card = ', v)
        dispatch(setActionVerb(v))
        navigation.navigate("ProposalStatementScreen")
    }

    const closeModal = () => {
        setVisible(false)
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
                    <View>
                        <Text type="Headline/Medium" variant="white">Choose your</Text>
                        <Text type="Headline/Medium" variant="red">Action Verb</Text>
                    </View>
                    <TouchableOpacity onPress={onPressIcon}>
                        <Image source={infoIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
                <Text type="Body/Medium" variant="white">What should LEARN do!?</Text>
                <Text type="Body/Medium" variant="white">Learn Should...</Text>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.CREATE)}>
                        <Text type="Body/Large" variant="white">Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.DEVELOP)}>
                        <Text type="Body/Large" variant="white">Develop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.IMPROVE)}>
                        <Text type="Body/Large" variant="white">Improve</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.INCREASE)}>
                        <Text type="Body/Large" variant="white">Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.EXPAND)}>
                        <Text type="Body/Large" variant="white">Expand</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => onPressCard(ProposalActionVerbType.REMOVE)}>
                        <Text type="Body/Large" variant="white">Remove</Text>
                    </TouchableOpacity>
                </View>
            </AppLayout>
        </View>
    )
};

export default ActionVerb;