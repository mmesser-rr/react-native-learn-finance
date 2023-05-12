import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  card: {
    borderColor: AppColors.coreWhite100,
    borderWidth: 0.3,
    borderRadius: Metrics.radius.card,
    marginTop: scale(20),
    overflow: 'hidden',
    shadowColor: AppColors.coreWhite100,
    shadowRadius: scale(10),
    shadowOpacity: 0.3,
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
    opacity: 0.9
  },
  content: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(18)
  }
});

export default styles;
