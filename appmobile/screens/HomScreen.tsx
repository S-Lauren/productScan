
import React from 'react'
import { Button, Image } from 'react-native';

import styled from 'styled-components/native';
import { HomeScreenProp } from './Navigator/MainNavigator';


const HomeScreen: React.FC<HomeScreenProp> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Image source={require("../assets/image.webp")} />
        <Button title="Search Product" onPress={() => navigation.navigate("ProductListScreen")} />
      </Container>
    </>
  )
}
const Container = styled.View`
  flex: 1; 
  justify-content: center; 
  align-items: center; 
  background-color: #FF754D;
`
const Title = styled.Text`
  font-size: 30px; 
  font-weight: bold; 
`
export default HomeScreen;