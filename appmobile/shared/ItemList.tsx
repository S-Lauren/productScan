import * as React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";


type ProductTitle = {
  title: string;
  source: {
    uri: string
  }
  score: number;
  onPress?: () => void;
}
const ItemList: React.FC<ProductTitle> = ({ title, source, score, onPress }) => (
  <Container onPress={onPress} >
    <Row>
      <Image style={{ width: 50, height: 50 }} source={source} />
      <Col>
        <TextList numberOfLines={1} ellipsizeMode='middle' >{title}</TextList>
        <TextScore>score: {score}</TextScore>
      </Col>
    </Row>
  </Container>
);

export default ItemList;

const TextList = styled.Text`
  color: white;
  font-size: 18px; 
  font-weight: bold; 
  margin-left: 10px; 
`
const TextScore = styled.Text`
  color: white;
  font-size: 14px; 
  font-weight: bold; 
  margin-left: 10px; 
`
const Container = styled.TouchableOpacity`
  height: 80px; 
  background-color: #2A2A2A;
`;

const Row = styled.View`
flex: 1; 
  flex-direction: row; 
  padding-left: 10px; 
  
`
const Col = styled.View`
  flex-direction: column;
`