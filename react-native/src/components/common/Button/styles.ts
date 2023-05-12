import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  action: {
    backgroundColor: AppColors.coreBlack100,
    borderRadius: 100,
    width: '100%',
    marginVertical: scale(8)
  },
  noRadiusAction: {
    backgroundColor: AppColors.coreBlack100,
    borderRadius: 0,
    width: '100%',
    marginVertical: scale(8)
  },
  label: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    textAlign: 'center',
    alignItems: 'center',
  },
  leftLabel: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    textAlign: 'left',
    alignItems: 'flex-start',
  },
});

export default styles;
