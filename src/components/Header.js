import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>Album</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#111",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    // Android Only
    elevation: 8,
  },
  headerTextStyle: {
    color: "#DBDBDB",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
