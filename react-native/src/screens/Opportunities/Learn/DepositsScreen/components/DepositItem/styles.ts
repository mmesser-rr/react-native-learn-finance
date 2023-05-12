import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: scale(12),
    backgroundColor: AppColors.coreBlack90,
    borderRadius: scale(12),
    marginTop: scale(16)
  },
  icon: {
    marginRight: scale(12)
  },
  depositTitle: {
    flexGrow: 1
  },
  durationLabel: {
    borderColor: AppColors.gray20,
    borderLeftWidth: scale(1),
    paddingLeft: scale(12)
  }
});

export default styles;