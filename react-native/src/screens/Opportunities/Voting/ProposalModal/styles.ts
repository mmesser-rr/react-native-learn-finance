import { StyleSheet } from 'react-native';
import AppColors from 'src/config/colors';
import { Metrics, scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: scale(10),
  },
  modalView: {
    width: '96%',
    margin: scale(10),
    backgroundColor: AppColors.coreBlack100,
    borderColor: '#fff',
    borderWidth: scale(1),
    borderRadius: scale(16),
    paddingTop: scale(16),
    paddingBottom: scale(16),
    paddingStart: scale(4),
    paddingEnd: scale(4),
    // alignItems: "center",
    zIndex: 5
  },
  closeIcon: {
    position: "absolute",
    right: scale(12),
    top: scale(12),
    zIndex: 6
  },
  modalTitle: {
    paddingHorizontal: scale(12),
    borderBottomColor: "#fff",
    borderBottomWidth: scale(1),
    paddingBottom: scale(12)
  },
  modalLearnText: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderBottomWidth: scale(1),
    borderBottomColor: "#fff",
  },
  modalGoalText: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
  }
});

export default styles;
