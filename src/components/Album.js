import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import AlbumInfoCard from "./AlbumInfoCard";
import TrackList from "./TrackList";

const Album = () => {
  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <AlbumInfoCard />
        <TrackList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Album;
