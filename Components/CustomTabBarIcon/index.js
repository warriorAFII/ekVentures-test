import React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomTabBarIcon = ({ name, size, color, isActive, activeColor }) => {
  return (
    <View style={styles.iconContainer}>
      {isActive && (
        <View
          style={[styles.activeIndicator, { backgroundColor: activeColor }]}
        />
      )}
      <FontAwesome name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeIndicator: {
    position: "absolute",
    top: -6,
    width: "80%",
    height: 4,
    borderRadius: 2,
  },
});

export default CustomTabBarIcon;
