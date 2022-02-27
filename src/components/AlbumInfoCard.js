import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumInfoCard = () => {
  return (
    <View style={styles.cardContainerStyle}>
      <Image
        style={styles.albumImageStyle}
        source={{
          uri: "https://images.squarespace-cdn.com/content/v1/52143a7ae4b0f9bd8308dc73/1572670824513-SXHMRDQY2J5RAM7N4LZC/Mag%2BMell.jpg?format=500w",
        }}
      />
      <View style={styles.infoContainerStyle}>
        <View>
          <Text style={styles.titleTextStyle}>Mag Mell</Text>
        </View>
        <View style={styles.typeContainerStyle}>
          <Text style={styles.typeTextStyle}>Album, 2014</Text>
          <View style={styles.artistContainerStyle}>
            <Image
              style={styles.artistImageStyle}
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/52143a7ae4b0f9bd8308dc73/1562163883783-GMM973J7GIXPAV6TCEQK/Mili+logo_no+back_SQ.png?format=1500w",
              }}
            />
            <Text style={styles.artistTextStyle}>Mili</Text>
          </View>
        </View>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: "90%",
    padding: 5,
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  albumImageStyle: {
    height: 300,
    width: 300,
  },
  infoContainerStyle: {
    width: "90%",
  },
  titleTextStyle: {
    color: "#111",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  typeContainerStyle: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeTextStyle: {
    color: "#696969",
    fontSize: 16,
    fontWeight: "100",
  },
  artistContainerStyle: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  artistImageStyle: {
    height: 20,
    width: 24,
    marginRight: 5,
  },
  artistTextStyle: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
  },
  hr: {
    borderBottomColor: "#BBB",
    borderBottomWidth: 1,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
});

export default AlbumInfoCard;
