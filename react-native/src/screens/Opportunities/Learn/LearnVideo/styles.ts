import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: AppColors.coreBlack100
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  closeIcon: {
    marginVertical: scale(42),
    marginHorizontal: scale(16),
    alignSelf: 'flex-start'
  },
  beginCard: {
    width: '92%',
    borderColor: AppColors.coreWhite100,
    borderWidth: scale(0.5),
    borderRadius: scale(12),
    alignSelf: 'center',
    paddingHorizontal: scale(24),
    paddingTop: scale(42),
    paddingBottom: scale(24),
    alignItems: 'center',
    backgroundColor: AppColors.coreBlack90
  },
  beginButton: {
    marginHorizontal: 0,
    marginTop: scale(32)
  },
  controlContainer: {
    backgroundColor: AppColors.coreBlack90,
    padding: scale(18)
  },
  controlBox: {
    marginTop: scale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  playpause: {
    marginHorizontal: scale(24)
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  formattedTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
