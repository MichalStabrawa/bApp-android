import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <Text>BudgetApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Corrected from containera
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
