import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import AppStyles from "src/config/styles";

const styles = StyleSheet.create({
  modalContainer: {
    padding: AppStyles.componentPadding,
    height: '100%',
    justifyContent: 'space-around'
  },
  modalBackground: {
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 0
  },
  modalBody: {
    paddingHorizontal: scale(6)
  },
  modalTitle: {
    marginVertical: scale(12)
  },
  modalDescription: {
    marginBottom: scale(12)
  },
  handleStyle: {
    display: 'none'
  },
  closeIcon: {
    marginVertical: scale(16),
    alignSelf: 'flex-start'
  },
});

export default styles;