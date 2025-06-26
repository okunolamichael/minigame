import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface GameScreenProps {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      // Alert the user that they are wrong
      Alert.alert("Don't lie!", "You know that's not true!", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Derive the guess number */}
        <Title>Guess a Number</Title>
        {/* Output the guess number */}
        <NumberContainer>{currentGuess}</NumberContainer>
        {/* contols to tell the programme if the number is too high or too low */}
        <Text>High or Low</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>Log Rounds</View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});
