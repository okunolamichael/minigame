import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonText}>
          <PrimaryButton>Reset </PrimaryButton>
        </View>
        <View style={styles.buttonText}>
          <PrimaryButton>Confirm </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 20,
    backgroundColor: "#9cc",
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },

  inputContainer: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderButtomColor: '#000',
    borderBottomWidth: 2,
    marginVertical: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonText: {
    flex: 1,
  }
});
