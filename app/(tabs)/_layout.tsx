import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                
              }}
            >
              <MaterialIcons name="home-filled" size={24} color={color} />
            </View>
          ),
        }}
      />
    
      
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="motorcycle" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
