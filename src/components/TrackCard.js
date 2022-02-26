import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const TrackCard = (props) => {
  const { title, artist, thumbnail_image, track_image } = props.track;
  return (
    <View style={styles.cardContainerStyle}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    flexDirection: "row",
    height: 100,
  },
});

export default TrackCard;
