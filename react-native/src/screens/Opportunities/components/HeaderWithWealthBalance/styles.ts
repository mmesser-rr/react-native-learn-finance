import { StyleSheet } from 'react-native';

import AppColors from "src/config/colors";
import { scale } from "src/config/dimentions";

const styles = StyleSheet.create({
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
  label: {
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  }
});

export default styles;