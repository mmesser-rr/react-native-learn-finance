import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    submitBtn: {
        marginTop: scale(12)
    },
    questionText: {
        marginTop: scale(16),
        backgroundColor: AppColors.blue,
        padding: scale(8),
        width: "80%",
        alignSelf: "flex-end",
        borderRadius: scale(10),
        overflow: "hidden"
    },
    answerText: {
        marginTop: scale(16),
        backgroundColor: AppColors.lightWhite,
        color: AppColors.coreBlack100,
        padding: scale(8),
        width: "80%",
        borderRadius: scale(10),
        overflow: "hidden"
    },
})

export default styles;