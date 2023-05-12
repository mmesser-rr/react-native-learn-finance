import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
  },
  viewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  head: {
    marginTop: scale(32),
    marginBottom: scale(32),
  },
  description: {
    marginBottom: scale(32),
  },
  askAction: {
    marginTop: scale(32),
  },
  askActionLabel: {
    marginTop: 0,
    marginBottom: 0,
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  rulesWrapper: {
    marginTop: scale(16),
    marginBottom: scale(16),
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ruleLable: {
    marginLeft: scale(8)
  },
  error: {
    marginLeft: scale(16),
    marginTop: scale(4),
  },
  loginInLabel: {
    color: AppColors.interactionBlue
  }
});

export default styles;
