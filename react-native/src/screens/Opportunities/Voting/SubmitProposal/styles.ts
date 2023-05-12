import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    submitBtn: {
        position: "absolute",
        bottom: 0
    },
    card: {
        marginTop: scale(16),
        backgroundColor: AppColors.cardGray,
        borderRadius: scale(16),
        paddingHorizontal: scale(20),
        paddingVertical: scale(28)
    },
    cardTitle: {
        marginBottom: scale(8)
    },
    mainContent: {
        marginBottom: scale(72)
    }
});

export default styles;
