import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

import Header from "./src/components/Header";
import AlbumInfoCard from "./src/components/AlbumInfoCard";
import TrackList from "./src/components/TrackList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <ScrollView>
        <AlbumInfoCard />
        <TrackList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
});
