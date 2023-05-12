import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  title: {
    marginVertical: scale(16)
  },
  attention: {
    padding: scale(16),
    borderColor: AppColors.coreWhite100,
    borderWidth: scale(2),
    borderRadius: scale(16)
  },
  question: {
    borderBottomColor: AppColors.coreBlack60,
    borderBottomWidth: scale(1),
    marginTop: scale(32),
    paddingBottom: scale(16),
    fontSize: scale(18),
    color: AppColors.coreWhite100
  }
});

export default styles;