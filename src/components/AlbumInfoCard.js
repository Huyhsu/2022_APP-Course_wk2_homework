import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumInfoCard = () => {
  return (
    <View style={styles.headerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: "https://i.scdn.co/image/ab67616d0000b273e00c247a9ad8492ee7b20411",
        }}
      />
      <Text style={styles.textStyle}>Mag Mell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FCF2F8",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#111",
    fontSize: 24,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
});

export default AlbumInfoCard;
