import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, ScrollView } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import TextInput from 'src/components/common/TextInput';
import Button from "src/components/common/Button";
import { IProposalStatementScreenProps } from 'src/types/opportunitiesRouterTypes';
import ProposalModal from '../ProposalModal';
import infoIcon from "src/assets/icons/info-icon.png";
import ProposalCard from '../ProposalCard';
import { setStatement } from 'src/store/slices/proposal.slice';
import { useAppDispatch, useAppSelector } from "src/store";
import styles from './styles'

const ProposalStatement: React.FC<IProposalStatementScreenProps> = ({navigation, route}) => {
    const dispatch = useAppDispatch()
    const { track } = useAppSelector(o => o.proposal)

    const [suggest, setSuggest] = useState("")
    const [visible, setVisible] = useState(false)
    const [inputErr, setInputErr] = useState(false)
    const [cardSmall, setCardSmall] = useState(false)

    const onPressGoBack = () => {
        console.log('press go back')
        navigation.goBack()
    }

    const onPressIcon = () => {
        console.log('press icon')
        setVisible(true)
    }

    const onChange = (v: string) => {
        setSuggest(v)
        setInputErr(false)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const onPressNext = () => {
        if (!suggest) {
            setInputErr(true)
            return
        }
        dispatch(setStatement(suggest))
        navigation.navigate("ProposalGoalScreen")
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
                        <Text type="Headline/Medium" variant="red" style={styles.createText}>Create</Text>
                        <Text type="Headline/Medium" variant="white">your Statement</Text>
                    </View>
                    <TouchableOpacity onPress={onPressIcon}>
                        <Image source={infoIcon} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <ProposalCard type={track} cardSmall={cardSmall}/>
                    <TextInput 
                            label="Enter the specific aspect of the LEARN experience that you'd like to suggest or improve."
                            onChangeText={onChange}
                            errorMessage="Please Input statement"
                            showErrorMessage={inputErr}
                            multiline={true}
                            value={suggest}
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

export default ProposalStatement;