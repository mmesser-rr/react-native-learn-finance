import { Dimensions, StyleSheet } from 'react-native';
import AppColors from "src/config/colors";
import { scale } from 'src/config/dimentions';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.coreBlack100
  },
  avoidViewContent: {
    flex: 1,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  view: {
    flex: 1,
    marginHorizontal: scale(9),
    // paddingBottom: scale(6),
    marginTop: scale(9),
    // maxHeight: scale(height - 50)
  },
  blurView: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    bottom: 0, 
    right: 0, 
    backgroundColor: AppColors.overlayBackdrop, 
    zIndex: 1
  }
});

export default styles;
