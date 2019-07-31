import React from "react";
import styled from "styled-components/native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Settings";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Test: TestScreen
  },
  {
    initialRouteName: "Test"
  }
);

export default createAppContainer(AppNavigator);
