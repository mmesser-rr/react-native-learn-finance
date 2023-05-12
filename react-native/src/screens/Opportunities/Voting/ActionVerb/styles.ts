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
    cardsContainer: {
        marginTop: scale(32),
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: AppColors.cardGray,
        paddingVertical: scale(54),
        borderRadius: scale(16),
        width: '46%',
        marginHorizontal: '2%',
        marginBottom: scale(16)
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
