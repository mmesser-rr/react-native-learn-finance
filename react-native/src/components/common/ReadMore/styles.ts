import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  description: {
    color: AppColors.coreWhite100,
    fontFamily: 'Lato-Medium',
    fontSize: scale(14),
    lineHeight: scale(16),
    letterSpacing: scale(0.25),
  },
  seeMore: {
    color: AppColors.coreBlue75
  },
  seeLess: {
    color: AppColors.coreBlue75
  }
});

export default styles;