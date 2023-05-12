import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    borderColor: AppColors.coreWhite100,
    borderWidth: scale(0.8),
    borderRadius: scale(8),
    paddingHorizontal: scale(22),
    paddingVertical: scale(14),
    marginBottom: scale(16)
  },
  question: {
    fontFamily: 'Lato-Medium',
    lineHeight: scale(18),
    letterSpacing: scale(0.25),
  },
  answerSummary: {
    marginTop: scale(8),
  }
});

export default styles;