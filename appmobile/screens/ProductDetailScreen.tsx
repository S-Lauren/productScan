import { gql, useMutation } from '@apollo/client';
import * as React from 'react';

import { Button, Image } from 'react-native'
import styled from 'styled-components/native';
import useFetch from '../hooks/useFetch';

import { ProductDetailScreenProp } from './Navigator/MainNavigator';


const HISTORIC_MUTATION = gql`
  mutation createProduct($product: ProductInput) {
    createProduct(product: $product ) {
      name
      image
      score
    }
  }
`;

const ProductDetailScreen: React.FC<ProductDetailScreenProp> = ({ route }) => {
  const { item, barcode } = route.params;

  const { data } = useFetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}`)

  const [createProduct] = useMutation(HISTORIC_MUTATION,
    {
      onError: (err) => {
        console.log(`the error:`, err);
      },
    }
  );

  const onSubmit = () => {
    return createProduct({ variables: { product: { name: data?.product_name, image: data?.image_url, score: data?.nutriscore_score } } })
  }

  return (
    <>
      {barcode ?
        <Container>
          <ImageContainer>
            <Image
              source={{ uri: `${data?.image_url}` }}
              style={{ width: 200, height: 200 }}
            />
          </ImageContainer>
          <CardContainer>
            <CardTitleContainer>
              <CardTitle>{data?.product_name}</CardTitle>
            </CardTitleContainer>
            <CardTextContainer>
              <CardText>Nutriscore: {data?.nutriscore_score}</CardText>
              <CardText>{data?.ingredients_text}</CardText>
              <Button title="Send to historic" onPress={onSubmit} />
            </CardTextContainer>
          </CardContainer>
        </Container>
        :
        < Container >
          <ImageContainer>
            <Image
              source={{ uri: `${item?.image || item?.image_url}` }}
              style={{ width: 200, height: 200 }}
            />
          </ImageContainer>
          <CardContainer>
            <CardTitleContainer>
              <CardTitle>{item?.product_name || item?.name}</CardTitle>
            </CardTitleContainer>
            <CardTextContainer>
              <CardText>Nutriscore: {item?.nutriscore_score || item?.score}</CardText>
              <CardText>{item?.ingredients_text}</CardText>
            </CardTextContainer>
          </CardContainer>
        </Container>

      }
    </>
  )

}


const Container = styled.View`
  flex: 1; 
  align-items: center; 
`
const ImageContainer = styled.View`
  height: 30%;
  width: 100%;
  overflow: hidden; 
  align-items: center; 
  background-color: #e2e2e2;
`
const CardContainer = styled.View`
  height: 30%;
  width: 100%;
  overflow: hidden; 
  align-items: center; 
  background-color: white;   
`
const CardTitle = styled.Text`
  font-size: 33px;
  font-weight: bold; 
  color: white; 
  text-align: center; 
`
const CardTextContainer = styled.View`
  width: 100%;
  flex: 1; 
  padding: 10px; 
`
const CardText = styled.Text`
  font-size: 14px;
  font-weight: bold; 
`
const CardTitleContainer = styled.View`
  height: 70px;
  width: 100%;  
  background-color: black; 
  justify-content: center;
`
export default ProductDetailScreen;