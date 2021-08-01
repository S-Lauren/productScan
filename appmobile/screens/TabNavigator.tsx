import "react-native-gesture-handler";
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from "./ProductListScreen";

import ScannerScreen from "./ScannerScreen";
import HistoricScreen from "./HistoricScreen";
import HomeScreen from "./HomScreen";



const Tab = createBottomTabNavigator();

function TabNavigator() {

  return (
    <Tab.Navigator initialRouteName="Navigation" tabBarOptions={{
      style: {
        height: 60,
        justifyContent: "center",
        alignItems: "center"
      },
      tabStyle: {
        height: 60,
        justifyContent: "center",
        alignItems: "center"
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarBadgeStyle: { height: '50%' }
        }}
      />
      <Tab.Screen name="Rechercher" component={ProductListScreen} />
      <Tab.Screen name="Scanner" component={ScannerScreen} />
      <Tab.Screen name="Historic" component={HistoricScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;