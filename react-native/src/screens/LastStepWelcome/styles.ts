import { StyleSheet } from 'react-native';
import { scale } from 'src/config/dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    position: "relative",
    marginHorizontal: scale(-18),
    paddingHorizontal: scale(18),
    marginBottom: scale(-24),
    marginTop: scale(-12),
    paddingBottom: scale(200)
  },
  logo: {
    alignItems: 'center',
    width: scale(188),
    height: scale(200),
  },
  description: {
    textAlign: 'center'
  }
});

export default styles;
