import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    title: {
        display: "flex",
        flexDirection: "row",
        marginBottom: scale(8)
    },
    progressBarContainer: {
        height: scale(8),
        borderWidth: scale(1),
        borderColor: AppColors.gray90,
        borderRadius: scale(12)
    },
    remainText: {
        marginTop: scale(4)
    },
    voteCard: {
        backgroundColor: AppColors.coreBlack86,
        marginTop: scale(16),
        borderRadius: scale(24),
        padding: scale(16),
        flex: 1,
        zIndex: 2
    },
    bottomCard: {
        position: "absolute",
        backgroundColor: AppColors.coreBlack90,
        height: scale(80),
        left: scale(24),
        right: scale(24),
        bottom: scale(80),
        borderRadius: scale(24),
    },
    voteCardHeader: {

    },
    voteCardBody: {
        marginTop: scale(24),
        marginBottom: scale(64)
    },
    voteCardFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        left: scale(16),
        right: scale(16),
        bottom: scale(16)
    },
    nextBtn: {
        borderRadius: scale(12),
        width: "35%",
        minWidth: scale(112)
    },
    heartBtnContainer: {
        paddingTop: scale(4)
    },
    heartBtn: {
        width: scale(48),
        height: scale(48)
    },
    swipeContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: scale(24)
    },
    swipeNum: {
        textAlign: "center"    
    },
    arrowContainer: {
        display: "flex",
        flexDirection: "row",
    },
    leftIcon: {
        marginRight: scale(132)
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
});

export default styles;
