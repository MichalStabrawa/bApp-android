import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/header1.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.text}>BudgetApp</Text>
        <Text style={styles.description}>
          Check currency and gold rates, compare currencies, buy and sell.
          Manage your household budget
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Start"
            onPress={() => {
              // Handle button press
            }}
            color="#BCECEE" // Customize button color
          />
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 500,
  },
  content: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#2822E2",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 20,
    flex: 1, // Adjust as needed
    width: "100%",
  },
  text: {
    fontSize: 32,
    marginBottom: 30,
    color: "#fff",
    fontWeight:'700' // Adjust as needed
  },
  description: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    maxWidth: 400,
  },
  buttonContainer: {
    maxWidth: 100,
    marginTop: 50,
    width: 200,
  },
});
