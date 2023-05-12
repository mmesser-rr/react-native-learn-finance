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
    smallCard: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: scale(16),
        backgroundColor: AppColors.cardGray,
        paddingVertical: scale(8)
    },
    cardText1: {
        marginTop: scale(10)
    },
    cardText2: {
        marginTop: scale(4)
    },
    smallImg: {
        width: scale(60)
    }
});

export default styles;
