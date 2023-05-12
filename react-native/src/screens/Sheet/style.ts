import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center'
    },
    backButton: {
        position: 'absolute',
        top: scale(5),
        left: scale(5),
        zIndex: 1
    },
    label: {
      color: AppColors.interactionBlue,
      fontSize: scale(16),
      letterSpacing: 0.5,
      textAlign: 'center',
    }
});

export default styles;
