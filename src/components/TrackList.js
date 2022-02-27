import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import TrackCard from "./TrackCard";
import albumData from "../json/Tracks.json";

const TrackList = () => {
  return (
    <View style={styles.cardContainerStyle}>
      <Text style={styles.titleTextStyle}>Track listing</Text>
      <TrackCard track={albumData[0]} />
      <TrackCard track={albumData[1]} />
      <TrackCard track={albumData[2]} />
      <TrackCard track={albumData[3]} />
      <TrackCard track={albumData[4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    alignItems: "center",
    width: "90%",
  },
  titleTextStyle: {
    color: "#111",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default TrackList;
