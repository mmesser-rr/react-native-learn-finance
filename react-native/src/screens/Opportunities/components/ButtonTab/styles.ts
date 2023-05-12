import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: scale(84),
    padding: scale(1),
    paddingBottom: scale(0),
    borderColor: AppColors.coreWhite100,
    borderBottomColor: AppColors.coreWhite100,
    borderBottomWidth: 2,
    borderWidth: scale(1),
    borderRadius: scale(0),
    marginRight: scale(12)
  }
});

export default styles;
