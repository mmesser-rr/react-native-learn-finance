import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';
import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100,
    height: Metrics.screenHeight,
    justifyContent: 'space-between'
  },
  backward: {
    top: scale(64),
    right: scale(16),
    alignSelf: 'flex-end'
  },
  infoBox: {
    marginTop: scale(20),
    marginVertical: scale(10),
    borderColor: AppColors.coreWhite100,
    borderWidth: Metrics.pixels.size2,
    borderRadius: Metrics.radius.card,
    padding: AppStyles.componentPadding
  },
  divider: {
    marginHorizontal: scale(1),
    marginVertical: scale(10),
    borderWidth: Metrics.pixels.size1,
    borderColor: AppColors.coreWhite100
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroPhoto: {
    height: Metrics.screenWidth * 0.45,
    position: 'relative'
  },
  avatar: {
    width: AppStyles.avatarSize,
    height: AppStyles.avatarSize,
    borderRadius: AppStyles.avatarSize * 2,
    position: 'absolute',
    bottom: -AppStyles.avatarSize / 2,
    left: scale(16)
  },
  paddingHorizontal16: {
    paddingHorizontal: scale(16)
  },
  tagline: {
    paddingTop: AppStyles.avatarSize / 4 * 3,
    paddingBottom: AppStyles.avatarSize / 3
  },
  wealthIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(4)
  },
  wealthAmount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  rsvpButton: {
    marginBottom: scale(70)
  },
  RegConfirmedButton: {
    opacity: 0.7
  },
  cancelRegButton: {
    marginTop: scale(10),
    marginBottom: scale(30),
  }
});

export default styles;
