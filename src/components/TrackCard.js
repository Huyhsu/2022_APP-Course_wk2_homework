import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const TrackCard = (props) => {
  const { title, artist, track_image } = props.track;
  return (
    <View style={styles.cardContainerStyle}>
      <View>
        <Image source={{ uri: track_image }} style={styles.trackImageStyle} />
        <View style={styles.infoContainerStyle}>
          <Text style={styles.titelTextStyle}>{title}</Text>
          <Text style={styles.artistTextStyle}>{artist}</Text>
        </View>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  trackImageStyle: {
    width: 240,
    height: 240,
    borderRadius: 5,
  },
  infoContainerStyle: {
    marginTop: 10,
  },
  titelTextStyle: {
    color: "#111",
    fontSize: 24,
    fontWeight: "bold",
  },
  artistTextStyle: {
    color: "#696969",
    fontSize: 16,
    fontWeight: "200",
  },
  hr: {
    borderBottomColor: "#BBB",
    borderBottomWidth: 1,
    marginTop: 20,
    width: 240,
    alignSelf: "center",
  },
});

export default TrackCard;
