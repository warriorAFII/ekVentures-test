import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Media from "./screens/Media";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Games from "./screens/Games";
import Reports from "./screens/Reports";
import Account from "./screens/Account";
import CustomTabBarIcon from "./Components/CustomTabBarIcon";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Tab = createBottomTabNavigator();
  const [videos, setVideos] = useState([]);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos"
        );
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    fetchVideos();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: route.name === "Media" ? "#151313" : "white",
          },
          tabBarActiveTintColor: route.name === "Media" ? "white" : "#3361BA",
          tabBarInactiveTintColor: route.name === "Media" ? "gray" : "black",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let activeColor = route.name === "Media" ? "white" : "#3361BA";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Media") {
              iconName = "control-play";
            } else if (route.name === "Games") {
              iconName = "game-controller";
            } else if (route.name === "Reports") {
              iconName = "chart";
            } else if (route.name === "Account") {
              iconName = "user";
            }

            return (
              <CustomTabBarIcon
                name={iconName}
                size={size}
                color={color}
                isActive={focused}
                activeColor={activeColor}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home">
          {(props) => <Home {...props} videos={videos} />}
        </Tab.Screen>
        <Tab.Screen name="Media">
          {(props) => <Media {...props} videos={videos} />}
        </Tab.Screen>
        <Tab.Screen name="Games" component={Games} />
        <Tab.Screen name="Reports" component={Reports} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
