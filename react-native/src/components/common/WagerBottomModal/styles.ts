import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';
import AppStyles from "src/config/styles";

const styles = StyleSheet.create({
  modalContainer: {
    padding: AppStyles.componentPadding,
    height: '100%'
  },
  modalBackground: {
    backgroundColor: AppColors.coreBlack85,
    borderRadius: 0
  },
  modalBody: {
    paddingHorizontal: scale(10),
  },
  modalTitle: {
    marginVertical: scale(5)
  },
  modalDescription: {
    marginVertical: scale(5)
  },
  handleStyle: {
    display: 'none'
  },
  closeIcon: {
    marginTop: scale(10),
    alignSelf: 'flex-start'
  },
  searchSection: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#302F2F',
    marginTop:scale(10),
    marginBottom:scale(10),
    height: scale(49),
    borderColor: '#ffffff',
    borderRadius: scale(10),
    borderWidth: scale(1)
  },
  searchIcon: {
    marginLeft: scale(10),
    marginBottom : scale(2)
  },
  wealthIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(6),
    marginLeft: scale(10)
  },
  input: {  
    marginRight: scale (20),
    marginLeft : scale (4),
    height: scale(30),
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: '60%'
  },
});

export default styles;