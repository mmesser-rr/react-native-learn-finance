import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  redText: {
    color: AppColors.accentRed100
  },
  progressBarContainer: {
    borderColor: AppColors.gray20,
    borderWidth: Metrics.pixels.size1,
    borderRadius: scale(3)
  }
});

export default styles;
