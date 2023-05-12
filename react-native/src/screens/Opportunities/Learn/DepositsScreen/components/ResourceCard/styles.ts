import { StyleSheet } from 'react-native';

import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    width: scale(110),
    height: scale(110),
    borderRadius: scale(13),
    marginRight: scale(25),
    borderWidth: 0.3,
    borderColor: AppColors.coreWhite100,
    overflow: 'hidden',
    shadowColor: AppColors.coreWhite100,
    shadowRadius: scale(10),
    shadowOpacity: 0.3,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.4
  }
});

export default styles;