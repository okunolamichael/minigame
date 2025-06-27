import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/ui/PrimaryButton";
import colors from "@/constants/colors";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";


interface StartGameScreenProps {
  onPickedNumber: (pickedNumber: number) => void;
}

const StartGameScreen = ({onPickedNumber}: StartGameScreenProps) => {
  
  // State to hold the input value, initially empty
  // binded to the TextInput
  const [enteredValue, setEnteredValue] = useState(""); 



  // Function to update the state when the TextInput changes
  //update enteredValue state when the TextInput changes
  const numberInputHandler = (enteredText: string) => {
    setEnteredValue(enteredText);
  };



  // Function to reset the input value to an empty string
  // This function is called when the user presses the "Reset" button
  const resetInputHandler = () => {
    setEnteredValue("");
  };



  // Function to handle the confirmation of the input value
  // This function is called when the user presses the "Confirm" button
  const confirmInputHandler = () => {

    const chosenNumber = parseInt(enteredValue); // Convert the entered value to a number

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }] // Show an alert if the input is invalid, with a button to reset the input
      );
      return; // If the input is not a valid number, do nothing. it make sure this function does countinue its execution if it made it into this if statement
    }


    onPickedNumber(chosenNumber); // Call the onPickedNumber function passed as a prop with the valid number
  };




  return (
    <View style={styles.titleText}>
      <SafeAreaView>
        <Title>
          Guess the number
        </Title>
      </SafeAreaView>
      <Card>
      <InstructionText>Enter your number</InstructionText>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredValue} // Bind the TextInput value to the state
        onChangeText={numberInputHandler} // Update the state when the input changes
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonText}>
          <PrimaryButton onPress={resetInputHandler}>Reset </PrimaryButton>
        </View>
        <View style={styles.buttonText}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm </PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    alignItems: "center",
  },
  


  inputContainer: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderColor: colors.black,
    borderBottomWidth: 2,
    marginVertical: 24,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonText: {
    flex: 1,
  },
});
