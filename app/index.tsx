import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "@/screens/StartGameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

export default function Index() {
  return (
    <View  style={styles.container}>
    <ImageBackground source={images.snow} resizeMode="cover" style={styles.container}>
      <StartGameScreen />
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
})
