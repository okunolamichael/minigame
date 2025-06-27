import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "@/screens/StartGameScreen";
import GameScreen from "@/screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { useState } from "react";
import GameOverScreen from "@/screens/GameOverScreen";
import {useFonts} from "expo-font";



export default function Index() {

  
  const [userNumber, setUserNumber] = useState<number | null>();
  
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  
  
  const [fontsLoaded] = useFonts({
    'rubic-bold': require('@/assets/fonts/Rubik-Bold.ttf'),
    'rubic-extra-bold': require('@/assets/fonts/Rubik-ExtraBold.ttf'),
    'rubic-light': require('@/assets/fonts/Rubik-Light.ttf'),
    'rubic-medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'rubic-regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'rubic-semi-bold': require('@/assets/fonts/Rubik-SemiBold.ttf'),
    'rubic-black': require('@/assets/fonts/Rubik-Black.ttf'),
    'rubic-black-italic': require('@/assets/fonts/Rubik-BlackItalic.ttf'),
    'rubic-bold-italic': require('@/assets/fonts/Rubik-BoldItalic.ttf'),
    'rubic-extra-bold-italic': require('@/assets/fonts/Rubik-ExtraBoldItalic.ttf'),
    'rubic-light-italic': require('@/assets/fonts/Rubik-LightItalic.ttf'),
    'rubic-medium-italic': require('@/assets/fonts/Rubik-MediumItalic.ttf'),
    'rubic-semi-bold-italic': require('@/assets/fonts/Rubik-SemiBoldItalic.ttf'),
    'rubic-italic': require('@/assets/fonts/Rubik-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  };

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false); // Reset game over state when a new number is picked
  }
  
  const gameOverHandler = () => {
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;
  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }



  return (
    <View  style={styles.container}>
    <ImageBackground source={images.snow} resizeMode="cover" style={styles.container}>
      <SafeAreaView  style={styles.container}>{screen}</SafeAreaView>
    </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
})
