import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "@/screens/StartGameScreen";
import GameScreen from "@/screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useState } from "react";



export default function Index() {

  const [userNumber, setUserNumber] = useState<number | null>();

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />;
  }


  return (
    <View  style={styles.container}>
    <ImageBackground source={images.snow} resizeMode="cover" style={styles.container}>
      {screen}
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
})
