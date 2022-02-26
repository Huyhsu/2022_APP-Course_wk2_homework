import React from "react";
import { View, ScrollView } from "react-native";

import TrackCard from "./TrackCard";
import albumData from "../json/Tracks.json";

const TrackList = () => {
  return (
    <View>
      <TrackCard track={albumData[0]} />
      <TrackCard track={albumData[1]} />
      <TrackCard track={albumData[2]} />
      <TrackCard track={albumData[3]} />
      <TrackCard track={albumData[4]} />
    </View>
  );
};

export default TrackList;
