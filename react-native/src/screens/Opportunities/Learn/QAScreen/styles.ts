import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  question: {
    fontWeight: "bold",
    marginTop: scale(16),
    marginBottom: scale(24)
  },
  answerContainer: {
    borderTopColor: AppColors.coreBlack60,
    borderTopWidth: scale(2),
    paddingVertical: scale(16)
  },
  authorTitle: {
    marginBottom: scale(12),
    lineHeight: scale(16)
  },
  description: {
    marginTop: scale(4),
    color: AppColors.coreWhite100,
    fontFamily: 'Lato-Medium',
    fontSize: scale(16),
    lineHeight: scale(16),
    letterSpacing: scale(0.5),
  },
  seeMore: {
    color: AppColors.coreBlue75
  },
  seeLess: {
    color: AppColors.coreBlue75
  }
});

export default styles;