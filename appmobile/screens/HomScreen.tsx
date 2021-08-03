
import React from 'react'
import { Button, Image } from 'react-native';

import styled from 'styled-components/native';
import { HomeScreenProp } from './Navigator/MainNavigator';


const HomeScreen: React.FC<HomeScreenProp> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Image source={require("../assets/image.webp")} />
        <Title>Scan your product ! </Title>
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
  position: absolute;
  font-weight: bold; 
  font-size: 16px; 
  padding-top: 20px; 
  color: white;
`

export default HomeScreen;