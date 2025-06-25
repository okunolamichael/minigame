import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";



// Define the props interface for the PrimaryButton component
// It expects children (text to display) and an onPress function
interface props {
  children: number | string;
  onPress: () => void;
}



// PrimaryButton component that renders a button with a shadow effect
// It accepts children (text to display) and an onPress function as props
const PrimaryButton = ({ children, onPress }: props) => {
  

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={onPress}
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
