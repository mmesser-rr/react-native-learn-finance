import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Modal, FlatList, SafeAreaView, LogBox, ImageBackground } from 'react-native';
import AppLayout from 'src/components/layout/AppLayout';
import { Text } from 'src/components/common/Texts';
import { IProposalSubmittedScreenProps } from 'src/types/opportunitiesRouterTypes';
import NavigationService from 'src/navigation/NavigationService';
import { useAppDispatch } from "src/store";
import { updateActiveRouteName } from "src/store/slices/navigation.slice";
import cloudImage from "src/assets/icons/cloud.png";
import successImage from "src/assets/icons/success-check.png";
import CloseIcon from "src/assets/icons/close-white.svg";
import styles from './styles'

const ProposalSubmitted: React.FC<IProposalSubmittedScreenProps> = ({navigation, route}) => {
    const dispatch = useAppDispatch();

    const onPressClose = () => {
        dispatch(updateActiveRouteName("OpportunitiesScreen"))
        navigation.navigate("OpportunitiesScreen")
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                <CloseIcon/>
            </TouchableOpacity>
            <ImageBackground source={cloudImage} style={styles.image}>  
                <Image source={successImage} resizeMode={'contain'} />
                <Text type="headline/Medium" variant="white" style={styles.text}>Thank you!</Text>
                <Text type="body/Medium" variant="white">Thank you for your proposal submission!</Text>
            </ImageBackground>
        </View>
    )
}

export default ProposalSubmitted;