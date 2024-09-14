import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "../../Components/Header";
import { Video } from "expo-av";

const Home = ({ videos, navigation }) => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Hello John,</Text>
        <Text style={styles.subtitle}>Please tap below</Text>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardIconContainer}>
            <FontAwesome name="heartbeat" color="white" size={24} />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={{ fontSize: 12 }}>Large font title</Text>
            <Text style={{ fontSize: 10, marginTop: 4 }}>Sub-title 💎💎💎</Text>
          </View>
          <FontAwesome
            name="chevron-right"
            color="black"
            style={styles.cardChevron}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.mediaHeader}>
          <FontAwesome name="play" size={24} color="black" />
          <Text style={styles.title}>Media</Text>
        </View>

        <ScrollView horizontal style={styles.scrollView}>
          {videos.map((video) => (
            <TouchableOpacity
              key={video.id}
              onPress={() => navigation.navigate("Media")}
            >
              <Video
                source={{ uri: video.urls.mp4 }}
                isMuted={false}
                resizeMode="contain"
                shouldPlay={false}
                isLooping
                style={styles.video}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.uploadButton}>
          <FontAwesome name="video-camera" size={24} color="white" />
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fffcec",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.15,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 12,
    height: 50,
    justifyContent: "space-between",
  },
  cardIconContainer: {
    backgroundColor: "#34A653",
    height: "100%",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  cardChevron: {
    paddingHorizontal: 15,
  },
  divider: {
    borderWidth: 0.3,

    borderColor: "#c9ccd1",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  mediaHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginTop: 12,
    paddingLeft: 20,
  },
  video: {
    width: 160,
    height: 280,
    borderRadius: 12,
    marginRight: 8,
  },
  uploadButton: {
    backgroundColor: "#3361BA",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
  },
  uploadButtonText: {
    color: "white",
  },
});

export default Home;
