import React, { useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox, ImageBackground } from 'react-native';
import { IOpportunitiesScreenProps } from 'src/types/opportunitiesRouterTypes';
import { Text } from 'src/components/common/Texts';
import Button from 'src/components/common/Button';
import moneyBagIcon from 'src/assets/icons/money-bag.png';
import voteBackground from "src/assets/icons/vote_background.png";
import styles from './styles';

const Voting:  React.FC<IOpportunitiesScreenProps> = ({
    route, navigation
  }: IOpportunitiesScreenProps) => {

    const onPressVoteBtn = () => {
        console.log('on press vote btn')
        navigation.navigate('VotingScreen')
    }

    const onPressSubmitBtn = () => {
        console.log('on press submit proposal btn')
        navigation.navigate('ProposalTrackScreen')
    }

    return (
        <>
            <ImageBackground source={voteBackground} style={styles.voteCard}>
                <Text type="Headline/Medium" variant='white'>Vote on Community Proposals</Text>
                <Text type="Body/Medium" variant='white'>We are community owned, that means your voice matters! Vote to shape the future of LEARN.</Text>
                <View style={styles.voteCardFooter}>
                    <Button variant='white' actionStyle={styles.footerBtn} onPress={onPressVoteBtn}>
                        <Text type="Body/Medium" variant='black'>Vote Now!</Text>
                    </Button>
                    <View style={styles.wealthContainer}>
                        <Image source={moneyBagIcon} style={styles.moneyBagIcon}/>
                        <Text type="Body/Medium" variant='white'>100 $WEALTH</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.proposalCard}>
                <Text type="Headline/Medium" variant='white'>Want to improve LEARN?!</Text>
                <Text type="Body/Medium" variant='white'>Get started by submitting an innovation statement.</Text>
                <View style={styles.voteCardFooter}>
                    <Button variant='white' actionStyle={styles.footerBtn} onPress={onPressSubmitBtn}>
                        <Text type="Body/Medium" variant='black'>Submit Proposal</Text>
                    </Button>
                    <View style={styles.wealthContainer}>
                        <Image source={moneyBagIcon} style={styles.moneyBagIcon}/>
                        <Text type="Body/Medium" variant='white'>100 $WEALTH</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Voting;