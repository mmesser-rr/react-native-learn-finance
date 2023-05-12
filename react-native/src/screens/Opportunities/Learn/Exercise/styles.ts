import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';
import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.coreBlack100
  },
  viewWrapper: {
    paddingTop: '30%',
    paddingBottom: '30%',
    flex: 1,
    backgroundColor: AppColors.coreBlack100
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    top: 50,
    backgroundColor: AppColors.coreWhite100
  },
  slideWrapper: {
    paddingHorizontal: scale(9)
  },
  questionText: {
    textAlign: 'center'
  },
  answerButton: {
    marginTop: scale(8),
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: AppColors.coreWhite100
  },
  correctAnswerButton: {
    marginTop: scale(8),
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: '#00FF00'
  },
  wrongAnswerButton: {
    marginTop: scale(8),
    backgroundColor: AppColors.transparent,
    borderWidth: Metrics.pixels.size1,
    borderColor: '#FF0000'
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
  btnStyle: {
    marginTop: scale(50)
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
