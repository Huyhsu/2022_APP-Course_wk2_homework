import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Header from "./src/components/Header";
import Album from "./src/components/Album";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Album />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
});
