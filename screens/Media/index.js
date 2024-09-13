import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Video } from "expo-av";
import PagerView from "react-native-pager-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const formatCount = (count) => {
  return count >= 10000 ? (count / 1000).toFixed(1) + "k" : count.toString();
};

const Media = ({ videos }) => {
  const [active, setActive] = useState(0);
  const [likedVideos, setLikedVideos] = useState({});

  const toggleLike = (index) => {
    setLikedVideos((prevLikedVideos) => ({
      ...prevLikedVideos,
      [index]: !prevLikedVideos[index],
    }));
  };

  return (
    <>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Media</Text>
        <FontAwesome name="search" size={20} color="white" />
      </SafeAreaView>

      <PagerView
        onPageSelected={(e) => setActive(e.nativeEvent.position)}
        orientation="vertical"
        style={styles.pagerView}
        initialPage={0}
      >
        {videos.map((video, index) => (
          <View key={index} style={styles.videoContainer}>
            <Video
              source={{ uri: video.urls.mp4 }}
              isMuted={false}
              rate={1.0}
              resizeMode="cover"
              shouldPlay={active === index}
              isLooping
              style={styles.video}
            />

            <View style={styles.infoContainer}>
              <TouchableOpacity onPress={() => toggleLike(index)}>
                <FontAwesome
                  name="heart"
                  size={24}
                  color={likedVideos[index] ? "red" : "white"}
                />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                {formatCount(video.likes_count)}
              </Text>

              <FontAwesome name="comment" size={24} color="white" />
              <Text style={styles.infoText}>
                {formatCount(video.comments_count)}
              </Text>

              <Feather name="more-horizontal" size={24} color="white" />
            </View>
          </View>
        ))}
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 30,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  pagerView: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  infoContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    gap: 10,
    alignItems: "center",
  },
  infoText: {
    color: "white",
  },
});

export default Media;
