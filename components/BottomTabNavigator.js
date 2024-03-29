import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from '../screens/HomeScreen.js';
import Recipe from '../screens/Recipe.js';
import ShoppingList from '../screens/ShoppingList.js';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home-outline";
              } else if (route.name === "Recipe") {
                iconName = "fast-food-outline";
              } else if (route.name === "Shopping List") {
                iconName = "basket-outline";
              }

              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FF8C00",
            inactiveTintColor: "black",
            style: {
              height: 130,
              borderTopWidth: 0,
              backgroundColor: "#5653d4"
            },
            
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Recipe" component={Recipe} />
          <Tab.Screen name="Shopping List" component={ShoppingList} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}