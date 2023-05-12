import {StyleSheet} from 'react-native';
import AppColors from 'src/config/colors';
import {scale} from 'src/config/dimentions';

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(18),
    paddingTop: scale(120),
  },
  contentWrapper: {
    marginTop: scale(32),
  },
  content: {
    marginTop: scale(50)
  },
  actionWrapper: {
    position: 'absolute',
    bottom: scale(18),
    left: 0,
    right: 0,
    paddingLeft: scale(18),
    paddingRight: scale(18)
  },
  joinAction: {
    marginBottom: scale(18),
    backgroundColor: AppColors.gray20,
  }
});

export default styles;
