import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    voteCard: {
        paddingHorizontal: scale(16),
        paddingVertical: scale(18),
        borderRadius: Metrics.radius.card,
        marginTop: scale(16),
        overflow: "hidden",
        borderColor: AppColors.coreWhite100,
        borderWidth: scale(1)
    },
    proposalCard: {
        paddingHorizontal: scale(16),
        paddingVertical: scale(18),
        borderRadius: Metrics.radius.card,
        marginTop: scale(16),
        backgroundColor: AppColors.cardRed,
    },
    voteCardFooter: {
        marginTop: scale(16),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerBtn: {
        width: '45%'
    },
    wealthContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    moneyBagIcon: {
        marginRight: scale(8)
    }
});

export default styles;
