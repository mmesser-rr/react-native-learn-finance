import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: scale(12)
    },
    headerText: {
        display: "flex",
        flexDirection: "row",
    },
    createText: {
        marginRight: scale(8)
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: AppColors.cardGray,
        paddingTop: scale(48),
        paddingBottom: scale(32),
        borderRadius: scale(16),
        marginBottom: scale(32)
    },
    cardText1: {
        marginTop: scale(10)
    },
    cardText2: {
        marginTop: scale(4)
    },
    nextBtn: {
        position: "absolute",
        bottom: 0    
    },
    blurView: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        bottom: 0, 
        right: 0, 
        backgroundColor: AppColors.overlayBackdrop, 
        zIndex: 1
    },
});

export default styles;
