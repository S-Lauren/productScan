import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import MainNavigator, { HomeScreenProp } from '../Navigator';

const HomeScreen: React.FC<HomeScreenProp> = ({ navigation }) => {

  return (
    <>

      <Container>
        <Text>uiuni</Text>

        <Button title="go on search" onPress={() => navigation.navigate("ProductListScreen")} />
      </Container>
    </>
  )
}
const Container = styled.View`
  margin-top: 20px; 
`
export default HomeScreen;