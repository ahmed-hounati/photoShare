import Colors from "@/constants/Colors";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Inbox() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar backgroundColor={Colors.black} barStyle={"light-content"} />
      <Image source={require('../../assets/images/splash-icon.png')} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 200,
    height: 200
  }
})
