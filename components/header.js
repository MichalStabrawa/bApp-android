import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/header.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.text}>BudgetApp</Text>
        <Text style={styles.text}>Lorem ipsum dorum lorem ipsum dorum</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Start"
            onPress={() => {
              // Handle button press
            }}
            color="blue" // Customize button color
          />
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    alignItems: "center",
    marginTop: 20, // Adjust as needed
  },
  text: {
    fontSize: 28,
    marginBottom: 10, // Adjust as needed
  },
  buttonContainer: {
    marginTop:50,
    width: 200, // Adjust button container width as needed
  },
});