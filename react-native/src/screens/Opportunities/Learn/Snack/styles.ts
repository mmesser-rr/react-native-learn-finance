import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
    problemView: {
      marginTop: scale(16),
      marginBottom: scale(16),
      padding: scale(16),
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 10,
      backgroundColor: "#262626"
    },
    swipeContainer: {
      paddingTop: scale(72),
      alignItems: "center",
    },
    swipeIcon: {
        marginBottom: scale(8)
    },
    editorStyle: {
      backgroundColor: "#000",
      color: "#fff"
    },
    richEditorStyle: {
      borderBottomWidth: scale(1),
      borderBottomColor: "#fff"
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
    blurView: {
      position: 'absolute', 
      left: 0, 
      top: 0, 
      bottom: 0, 
      right: 0, 
      backgroundColor: AppColors.overlayBackdrop, 
      zIndex: 1
    }
})

export default styles;