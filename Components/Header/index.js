import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const Header = () => {
  return (
    <View
      style={{
        marginTop: 70,

        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 0.3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 24, width: 147 }}
        />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <EvilIcons name="search" size={24} color="black" />
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="bell" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Header;
