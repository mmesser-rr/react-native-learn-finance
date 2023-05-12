import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    overflow: "hidden",
    flexGrow: 1
  },
  sponsorLabel: {
    marginTop: scale(8)
  },
  socialHandlesContainer: {
    flexDirection: "row",
    overflow: "scroll",
    minHeight: scale(32),
    marginVertical: scale(8)
  },
  socialIconContainer: {
    width: scale(57),
    height: scale(32),
    borderRadius: scale(9),
    marginRight: scale(11),
    backgroundColor: "#4D4D4D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  resourcesLabel: {
    marginBottom: scale(8)
  },
  resourcesContainer: {
    flexDirection: "row",
    minHeight: scale(110),
  }
});

export default styles;