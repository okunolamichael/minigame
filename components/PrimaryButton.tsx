import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface props {
  children: number | string;
}

const PrimaryButton = ({ children }: props) => {
  const pressHandler = () => {
    console.log("Button Pressed!");
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={pressHandler}
          style={({ pressed }) =>
            pressed
              ? [styles.buttonContainer, styles.pressed]
              : styles.buttonContainer
          }
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    elevation: 2, // Android shadow
},
buttonContainer: {
    borderRadius: 28,
    margin: 24,
    backgroundColor: "#5cc",
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
