import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

interface CardProps {
  source: string;
  title?: string;
  score?: number;
  ingredients?: string;
}

const Card: React.FC<CardProps> = ({ source, title, score, ingredients }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          source={source}
          style={{ width: 200, height: 200 }}
        />
      </ImageContainer>
      <CardContainer>
        <CardTitleContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>

        <CardTextContainer>
          <CardScore>Nutriscore: {score ? score : "\nscore not found for this product"}</CardScore>
          <ScrollView>
            <CardText>{ingredients ? ingredients : "No ingredients were found \n for this product"}</CardText>
          </ScrollView>
        </CardTextContainer>

      </CardContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1; 
  background-color: white; 
`
const ImageContainer = styled.View`
  height: 30%;
  width: 100%;
  overflow: hidden; 
  align-items: center; 
  background-color: #e2e2e2;
    box-shadow: 5px 10px 25px black;
    elevation: 1

`
const CardContainer = styled.View`
  height: 30%;
  width: 100%;
  overflow: hidden; 
  align-items: center; 
  flex: 1; 
  background-color: white;   
  
`
const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold; 
  color: black; 
  text-align: center; 
`
const CardTextContainer = styled.View`
  width: 100%;
  flex: 1; 
  padding: 20px; 
`
const CardText = styled.Text`
  font-size: 14px;
  line-height: 24px; 
  text-align: center; 
`
const CardScore = styled.Text`
  font-size: 14px;
  color: #ff6363;
  font-weight: bold; 
  margin:0 0 20px 0; 

  text-align: center; 
`
const CardTitleContainer = styled.View`
  height: 70px;
  flex-direction: column; 
  width: 100%;  
  justify-content: center;
`
export default Card;