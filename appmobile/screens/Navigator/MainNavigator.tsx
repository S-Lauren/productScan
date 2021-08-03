import * as React from "react";

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from "@react-navigation/native";

import ProductListScreen, { ProductListProps } from "../ProductListScreen";

import TabNavigator from "../TabNavigator";
import ProductDetailScreen from "../ProductDetailScreen";
import ScannerScreen from "../ScannerScreen";
import HistoricScreen from "../HistoricScreen";


export type RootStackParamList = {
  Home: undefined;
  ProductListScreen: undefined;
  TabNavigator: undefined;
  ProductDetailScreen: { item?: ProductListProps, barcode?: string };
  ScannerScreen: { barcode: string };
  HistoricScreen: undefined;
}
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailScreen'>;
type ProductDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetailScreen'
>;
type ProductListcreenRouteProp = RouteProp<RootStackParamList, 'ProductListScreen'>;
type ProductListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductListScreen'
>;

type ScannerScreenRouteProp = RouteProp<RootStackParamList, 'ScannerScreen'>;
type ScannerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScannerScreen'
>;
type HistoricScreenRouteProp = RouteProp<RootStackParamList, 'HistoricScreen'>;
type HistoricScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HistoricScreen'
>;
export type HomeScreenProp = {
  navigation: HomeScreenNavigationProp,
  route: HomeScreenRouteProp
}
export type ProductDetailScreenProp = {
  navigation: ProductDetailScreenNavigationProp,
  route?: ProductDetailScreenRouteProp
}
export type ProductListScreenProp = {
  navigation: ProductListScreenNavigationProp,
  route: ProductListcreenRouteProp
}
export type ScannerScreenProp = {
  navigation: ScannerScreenNavigationProp,
  route: ScannerScreenRouteProp
}
export type HistoricScreenProp = {
  navigation?: HistoricScreenNavigationProp,
  route?: HistoricScreenRouteProp
}
const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ title: "yuka" }} />
          <Stack.Screen
            name='ProductListScreen'
            component={ProductListScreen}
            options={{ title: 'Rechercher' }}
          />
          <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={{ headerShown: true, title: "details product" }} />
          <Stack.Screen name='ScannerScreen' component={ScannerScreen} />
          <Stack.Screen name='HistoricScreen' component={HistoricScreen} options={{ headerShown: true, title: "All product scanned" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}