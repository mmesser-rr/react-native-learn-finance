import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.overlayBackdrop,
  },
  spinnerContainer: {
    transform: [{translateY: -56}],
  },
  spinner: {
    height: 56,
    width: 56,
  },
  loadingText: {
    marginTop: scale(30)
  }
});

export default styles;
