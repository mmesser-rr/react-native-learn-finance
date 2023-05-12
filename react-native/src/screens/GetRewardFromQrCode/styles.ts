import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
    flex: 1,
  },
  loadingContainer: {
    backgroundColor: AppColors.coreBlack100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    marginTop: scale(100),
    marginBottom: scale(100),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  btnStyle: {
    marginTop: scale(80)
  },
  mediumTop: {
    marginTop: scale(20)
  },
  smallTop: {
    marginTop: scale(10)
  },
  exitIcon: {
    position: 'absolute',
    top: scale(100),
    right: 0,
    zIndex: 3
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(13)
  },
  wealthBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: scale(6),
    borderColor: AppColors.coreWhite100,
    borderWidth: scale(2),
    borderRadius: scale(6)
  },
  wealthIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(6)
  },
})

export default styles