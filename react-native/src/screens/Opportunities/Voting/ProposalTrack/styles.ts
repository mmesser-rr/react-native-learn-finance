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
    proposalText: {
        marginRight: scale(8)
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
        paddingTop: scale(24),
        paddingBottom: scale(20),
        borderRadius: scale(16),
        width: '48%',
        marginHorizontal: '1%',
        marginBottom: scale(16),
    },
    cardText1: {
        marginTop: scale(4)
    },
    cardText2: {
        marginTop: scale(4),
        textAlign: "center"
    },
    cardBody: {
        display: 'flex',
        alignItems: 'center'
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
    disableLayer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 2,
    },
    diableContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    alarmText: {
        marginTop: scale(16)
    },
    closeIcon: {
        position: "absolute",
        top: scale(60),
        right: scale(20),
        zIndex: 2
    },
    imageIcon: {
        height: scale(92)    
    },
    learningIcon: {
        marginBottom: scale(8)
    }
});

export default styles;
