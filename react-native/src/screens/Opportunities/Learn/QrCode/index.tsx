import React, { useMemo, useRef, useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import { Text } from 'src/components/common/Texts';
import { IQrCodeProps } from 'src/types/opportunitiesRouterTypes';
import QRCode from 'react-native-qrcode-svg';
import AppLayout from 'src/components/layout/AppLayout';
import styles from './styles';
import CloseIcon from 'src/assets/icons/close-gray.png';
import treasureIcon from  'src/assets/icons/treasure.png';
import { useAppDispatch, useAppSelector } from "src/store/index";
import * as navigationActions from 'src/store/actions/navigationActions';

const QrCodeScreen: React.FC<IQrCodeProps> = ({
    route,
    navigation
}) => {
    const { data } = route.params
    const windowWidth = Dimensions.get('window').width;
    const dispatch = useAppDispatch();

    const qrcodeId = data.id
    const athleteId = useAppSelector(o => o.user.user?.id) as string;

    console.log('qrcodeId = ', qrcodeId)
    console.log('athleteId = ', athleteId)

    const onPressClose = () => {
        dispatch(navigationActions.updateActiveRouteName("ExerciseResultScreen"));
        navigation.navigate('ExerciseResultScreen');
    }

    return(
        <AppLayout>
            <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
                <Image source={CloseIcon} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Image source={treasureIcon} />
                <Text type="Headline/Large" variant="white">Screenshot Me!</Text>
                <Text type="Body/Medium" variant="white">There might be a little prize</Text>
                <Text style={{marginBottom: 20}} type="Body/Medium" variant="white">inside :)</Text>
                <QRCode 
                value={`peoplesapp://qrcode/${athleteId}/${qrcodeId}`}
                size={windowWidth - 100}
                />
            </View>
        </AppLayout>
    )
}

export default QrCodeScreen;