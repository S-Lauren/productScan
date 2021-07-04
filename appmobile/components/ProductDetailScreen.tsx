import { gql, useMutation } from '@apollo/client';
import * as React from 'react';

import { Button, Image } from 'react-native'
import styled from 'styled-components/native';

import { ProductDetailScreenProp } from './Navigator';


const HISTORIC_MUTATION = gql`
mutation createProductList($name: String!, $image: String, $score: Int) {
  createProductList(input: {name: $name, image: $image, score: $score} ) {
  	name
    image
    score
  }
}
`;


const ProductDetailScreen: React.FC<ProductDetailScreenProp> = ({ navigation, route }) => {
  const { item, barcode } = route.params;
  const [product, setProduct] = React.useState<any>([])
  // const [createProductList, { data, error, loading }] = useMutation(SEND_TO_HISTORIC_MUTATION)

  const [createProductList, { data }] = useMutation(HISTORIC_MUTATION);

  React.useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}`)
      .then(res => res.json())
      .then(data => {
        const newData: any = data.product;
        setProduct(newData)


      })
  }, [])

  // const onSubmit = () => {
  const onSubmit = async () => {

    const responseData = await createProductList({
      variables: {
        input: {
          name: product.product_name,
          image: product.image_url,
          score: product.nutriscore_score
        },
      },


    })
    if (responseData.data) {
      return JSON.parse(responseData.data[1])
    }
    console.log(responseData.data[1])
  }


  //   createProductList({
  //     variables: {
  //       name: product.product_name,
  //       image: product.image_url,
  //       score: product.nutriscore_score
  //     }
  //   })

  // }
  console.log(data)
  // console.log(product.product_name,);

  return (
    <>
      {barcode ?
        <Container>
          <ImageContainer>
            <Image
              source={{ uri: `${product?.image_url}` }}
              style={{ width: 200, height: 200 }}
            />
          </ImageContainer>
          <CardContainer>
            <CardTitleContainer>
              <CardTitle>{product?.product_name}</CardTitle>
            </CardTitleContainer>
            <CardTextContainer>
              <CardText>Nutriscore: {product?.nutriscore_score}</CardText>
              <CardText>{product?.ingredients_text}</CardText>

              <Button title="Send to historic" onPress={onSubmit} />
            </CardTextContainer>
          </CardContainer>
        </Container>


        :
        < Container >
          <ImageContainer>
            <Image
              source={{ uri: `${item?.image_url}` }}
              style={{ width: 200, height: 200 }}
            />
          </ImageContainer>
          <CardContainer>
            <CardTitleContainer>
              <CardTitle>{item?.product_name}</CardTitle>
            </CardTitleContainer>
            <CardTextContainer>
              <CardText>Nutriscore: {item?.nutriscore_score}</CardText>
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
  s
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