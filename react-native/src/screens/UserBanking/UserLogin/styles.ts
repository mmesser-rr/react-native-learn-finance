import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  viewWrapper: {
    flex: 1,
    backgroundColor: AppColors.coreBlack100,
    justifyContent: 'space-between',
    paddingTop: scale(50),
    paddingBottom: scale(30),
    paddingHorizontal: scale(18)
  },
  head: {
    marginBottom: scale(32),
  },
  email: {
    marginBottom: scale(32),
  },
  signUp: {
    marginBottom: scale(11),
    alignItems: 'flex-end',
  },
  signUpLabel: {
    color: AppColors.interactionBlue
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: "flex-start",
    marginTop: scale(32)
  },
  rememberMeSwitch: {
    marginLeft: scale(16)
  },
  forgotPassword: {
    marginTop: scale(32),
    alignItems: 'center',
  },
  forgotPasswordLabel: {
    color: AppColors.interactionBlue
  },
  misMatchAlert: {
    marginBottom: scale(32)
  },
  emailAlert: {
    marginLeft: scale(16),
    marginTop: scale(4),
  },
});

export default styles;
