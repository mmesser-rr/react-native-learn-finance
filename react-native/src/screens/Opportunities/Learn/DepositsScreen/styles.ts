import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  goToDashboardLabel: {
    color: AppColors.interactionBlue,
    fontSize: scale(16),
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  title: {
    marginVertical: scale(16),
    textAlign: "center"
  },
  tabGroup: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: scale(12),
    paddingBottom: scale(0),
    marginBottom: scale(20),
    borderBottomColor: 'white',
    borderBottomWidth: scale(0.2)
  },
  heroPhoto: {
    height: Metrics.screenWidth * 0.45,
    position: 'relative',
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    overflow: "hidden"
  },
  wagerCheckButton:{
    width:scale(88),
    height:scale(22), 
    backgroundColor:'#4CAF50', 
    marginTop:scale(8), 
    borderRadius:scale(6)
  },
  wagerCheckContent:{
    flexDirection:'row', 
    paddingVertical:scale(0),
    paddingTop:scale(3), 
    paddingHorizontal:scale(2), 
    paddingLeft:scale(6)
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(10),
  },
  modalView: {
    width: '96%',
    margin: scale(10),
    backgroundColor: "#262626",
    borderColor: AppColors.coreWhite100,
    borderWidth: scale(1),
    borderRadius: scale(8),
    paddingTop: scale(25),
    paddingBottom: scale(20),
    paddingStart: scale(10),
    paddingEnd: scale(10),
    alignItems: "center",
    zIndex: 5
  },
  modalLargeText: {
    marginTop: scale(20)
  },
  modalMediumText: {
    marginTop: scale(10)
  },
  btnStyle: {
    marginTop: scale(50)
  },
  exItemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: scale(12),
    backgroundColor: AppColors.coreBlack90,
    borderRadius: scale(12),
    marginTop: scale(16)
  },
  exItemicon: {
    marginRight: scale(12)
  },
  exItemdepositTitle: {
    flexGrow: 1
  },
  blurView: {
    position: 'absolute', 
    left: 0, 
    top: 0, 
    bottom: 0, 
    right: 0, 
    backgroundColor: AppColors.overlayBackdrop, 
    zIndex: 1
  }
});

export default styles;