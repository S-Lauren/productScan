import { gql, useMutation } from '@apollo/client';
import * as React from 'react';

import styled from 'styled-components/native';
import useFetch from '../hooks/useFetch';
import Card from '../shared/Card';

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

const ProductDetailScreen: React.FC<ProductDetailScreenProp> = ({ route, navigation }) => {
  const { item, barcode } = route?.params || {};

  const { data } = useFetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}`)

  const [createProduct] = useMutation(HISTORIC_MUTATION,
    {
      onError: (err) => {
        console.log(`the error:`, err);
      },
    }
  );

  const onSubmit = () => {
    return createProduct({ variables: { product: { name: data?.product_name, image: data?.image_url, score: data?.nutriscore_score, ingredients: data?.ingredients_text } } })
  }

  return (
    <>
      {barcode ?
        <>
          <Card
            source={{ uri: `${data?.image_url}` }}
            title={data?.product_name}
            score={data?.nutriscore_score}
            ingredients={data?.ingredients_text}
          />
          <ButtonHistoric onPress={onSubmit}><ButtonHistoricText>Send to historic</ButtonHistoricText></ButtonHistoric>
        </>
        :
        <>
          <Card
            source={{ uri: `${item?.image || item?.image_url}` }}
            title={item?.product_name || item?.name}
            score={item?.nutriscore_score || item?.score}
            ingredients={item?.ingredients_text || item.ingredients}
          />
          <ButtonHistoric onPress={() => navigation.navigate("Home")}><ButtonHistoricText>Go back Home</ButtonHistoricText></ButtonHistoric>
        </>
      }

    </>
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
  padding: 10px; 
`
const CardText = styled.Text`
  font-size: 14px;
  line-height: 24px; 
  text-align: center; 
`
const CardTitleContainer = styled.View`
  height: 70px;
  flex-direction: column; 
  width: 100%;  
  justify-content: center;
`
const ButtonHistoric = styled.TouchableOpacity`
  height: 40px; 
  align-items: center; 
  background-color: #159aed;
  justify-content: center;
  border-radius: 50px; 
  margin: 20px; 
`
const ButtonHistoricText = styled.Text`
 color: white; 
 font-weight: bold; 
`
export default ProductDetailScreen;