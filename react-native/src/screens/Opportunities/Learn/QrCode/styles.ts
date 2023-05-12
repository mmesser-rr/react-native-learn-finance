import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.coreBlack100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeIcon: {
      position: 'absolute',
      left: scale(16),
      top: scale(42),
      zIndex: 3
    }
});

export default styles;