import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Modal, Animated } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import Button from "src/components/common/Button";
import HeaderWithWealthBalance from "../../components/HeaderWithWealthBalance";
import { ISubmitProposalScreenProps } from 'src/types/opportunitiesRouterTypes';
import { submitProposal } from 'src/store/slices/proposal.slice';
import { useAppDispatch, useAppSelector } from "src/store";
import styles from './styles'

const SubmitProposal: React.FC<ISubmitProposalScreenProps> = ({navigation, route}) => {
    const dispatch = useAppDispatch()
    const { statement, desiredGoal, actionVerb } = useAppSelector(o => o.proposal);

    const onPressGoBack = () => {
        console.log('press go back')
        navigation.goBack()
    }

    const onPressSubmit = () => {
        // console.log('press submit')
        dispatch(submitProposal())
        navigation.navigate("ProposalSubmittedScreen")
    }

    const makeOnlyFirstLetterUpper = (word: string) => {
        const lower = word.toLocaleLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }



    return (
        <View style={{flex: 1}}>
            <AppLayout>
                <HeaderWithWealthBalance label="Go Back" onPressLabel={onPressGoBack} />
                <Text type="Headline/Medium" variant="white">Submit Proposal</Text>
                <ScrollView style={styles.mainContent}>
                    <View style={styles.card}>
                        <Text type="Headline/small" style={styles.cardTitle} variant="white">LEARN should</Text>
                        <Text type="Body/Large" variant="white">{makeOnlyFirstLetterUpper(actionVerb) + " " + statement}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text type="Headline/small" style={styles.cardTitle} variant="white">Desired goal</Text>
                        <Text type="Body/Large" variant="white">{desiredGoal}</Text>
                    </View>
                </ScrollView>
                <Button variant="red" onPress={onPressSubmit} actionStyle={styles.submitBtn} noRadius={true}>
                    <Text type="Body/Large">Submit</Text>
                </Button>
            </AppLayout>
        </View>
    )
}

export default SubmitProposal;