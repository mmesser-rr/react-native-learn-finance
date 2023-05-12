import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AppLayout from "src/components/layout/AppLayout";
import Button from 'src/components/common/Button';
import { Text } from 'src/components/common/Texts';
import { SheetProps } from 'src/types/routerTypes';
import { WebView } from 'react-native-webview';
import NavigationService from 'src/navigation/NavigationService';
import styles from './style';

const Sheet: React.FC<SheetProps> = ({ route, navigation }) => {
    const params = route.params || {}
    const url = params.url || ''

    const goBack = () => {
        console.log('click goBack')
        navigation.goBack();
    }

    return (
        <AppLayout>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={goBack}>
                    <Text type="Body/Large" style={styles.label}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>

            <Text type="Headline/Small" variant='white' style={styles.headerText}>Exercise</Text>
            <WebView
                source={{ uri: url }}
                style={{ marginTop: 20 }}
            />
        </AppLayout>
    )
}

export default Sheet;
