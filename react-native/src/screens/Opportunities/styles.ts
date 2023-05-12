import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  tabGroup: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: "100%",
    paddingTop: scale(16),
    paddingBottom: scale(0),
    borderBottomColor: 'white',
    borderBottomWidth: scale(0.2),
    marginTop: scale(25)
  },
  leaderBoardGroup: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: "100%",
    paddingTop: scale(0),
    backgroundColor:'#888888',
    paddingBottom: scale(0),
    borderBottomColor: 'white',
    borderBottomWidth: scale(0.2),
    marginTop: scale(0)
  },
  bold: {
    fontWeight: 'bold'
  },
  sponsor: {
    marginTop: scale(52)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  clearButton: {
    marginTop: scale(16)
  },
  leaderBoardText:{
    borderColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: scale(10)
  },

  ownContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: scale(12),
    backgroundColor: '#262626',
    borderRadius: scale(12),
    borderColor: AppColors.accentRed100,
    borderWidth: scale(1),
    marginTop: scale(16),
    flex: 1
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: scale(12),
    backgroundColor: '#262626',
    borderRadius: scale(12),
    marginTop: scale(16),
    flex: 1
  },
  container1: {  
    // padding: scale(12),
    borderBottomWidth: scale(1),
    borderBottomColor: '#262626',
    flexDirection: "row",
    // borderRadius: scale(12),
    // marginTop: scale(16),
    // flex: 1
  },
  mainContainer: {
    flex:1,
    backgroundColor: AppColors.coreBlack100
  },
  icon: {  
    flex:0.5,
    flexGrow:0.5
  },
  depositTitle: {
    flexGrow: 1
  },
  depositTitle1: {
    flexGrow: 1, 
    flex: 1, 
    textAlign: 'left'
  },
  depositTitle2: {
    flexGrow: 5, 
    flex: 5, 
    textAlign: 'left'
  },
  depositTitle3:{
    flexGrow: 1,
    flex: 1, 
    textAlign: 'right'
  },
  durationLabel: {
    borderColor: '#999999',
    borderLeftWidth: scale(1),
    paddingLeft: scale(12)
  },
  lblabel: {
    paddingHorizontal: scale(2),
    paddingVertical: scale(1),
    textAlign: 'right',
  },
  lbaction: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: '100%',
    marginVertical: scale(2)
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
    borderColor: '#fff',
    borderWidth: scale(1),
    borderRadius: scale(8),
    paddingTop: scale(25),
    paddingBottom: scale(20),
    paddingStart: scale(10),
    paddingEnd: scale(10),
    alignItems: "center",
    zIndex: 5
  },
  btnStyle: {
    marginTop: scale(50)
  },
  HeadlineText: {
    marginTop: scale(20)
  },
  bodyText: {
    marginTop: scale(10)
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
