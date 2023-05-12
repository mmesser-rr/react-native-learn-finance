import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  wealthBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: scale(6)
  },
  wealthIcon: {
    width: scale(14),
    height: scale(14),
    marginRight: scale(6)
  }
});

export default styles;