import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.coreBlack100,
    }, 
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        marginTop: scale(12),
        marginBottom: scale(10)
    },
    closeIcon: {
        position: "absolute",
        top: scale(60),
        right: scale(20),
        zIndex: 2
    }
});

export default styles;
