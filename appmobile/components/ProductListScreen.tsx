import * as React from 'react'
import { FlatList, ListRenderItem, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { useProductList } from '../context/Products.context'
import { ProductListScreenProp } from './Navigator'

export interface ProductListProps {

  _id: number;
  product_name: string;
  image_front_thumb_url: string;
  nutriscore_score: number;
  onPress?: () => void;
  image_url: string
  ingredients_text: string;
  code: string;

}

type ProductTitle = {
  title: string;
  source: {
    uri: string
  }
  score: number;
  onPress?: () => void;
}
const Item: React.FC<ProductTitle> = ({ title, source, score, onPress }) => (
  <ItemList onPress={onPress} >
    <Row>
      <Image style={{ width: 50, height: 50 }} source={source} />
      <Col>
        <TextList numberOfLines={1} ellipsizeMode='middle' >{title}</TextList>
        <TextScore>score: {score}</TextScore>
      </Col>
    </Row>
  </ItemList>
);


const ProductListScreen: React.FC<ProductListScreenProp> = ({ navigation }) => {

  const [value, setValue] = React.useState<string>("")
  const [list, setList] = React.useState<ProductListProps[]>([])


  React.useEffect(() => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${value}&search_simple=1&action=process&json=1`)
      .then(res => res.json())
      .then(data => {
        const newData: any = [...data.products];
        setList(newData)
      }
      )
  }, [value])

  // debounce
  const handleSearch = React.useCallback((text: string) => {
    setValue(text)
  }, [])

  const renderItem: ListRenderItem<ProductListProps> = ({ item }) => <Item onPress={() => navigation.navigate("ProductDetailScreen", { item })} title={item.product_name} source={{ uri: `${item.image_front_thumb_url}` }} score={item.nutriscore_score} />;

  return (
    <>

      <FormContainer>
        <Input value={value} onChangeText={handleSearch} />
        <ButtonWrapper >
          <ButtonText>Hello</ButtonText>
        </ButtonWrapper>
      </FormContainer>

      <SafeAreaView style={{ flex: 1, backgroundColor: "#2A2A2A" }}>
        <FlatList data={list} renderItem={renderItem} keyExtractor={item => item._id + 'P'} />
      </SafeAreaView>

    </>
  )
}
const FormContainer = styled.View`
  background-color: #46d693;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 20%;
  
`
const Row = styled.View`
flex: 1; 
  flex-direction: row; 
  padding-left: 10px; 
  
`
const Col = styled.View`
  flex-direction: column;
`
const Input = styled.TextInput`
  background-color: white;

  color: black;
  width: 300px;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 200px;
  border-radius: 5px;
  height: 35px;
  border-color: black;
  text-align: center;

`
const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 10px; 
  height: 30px; 
  background-color: #3bb2bf;
  width: 200px; 
  align-items: center;
  justify-content: center; 
  border-radius: 50px;
`

const ButtonText = styled.Text`
  color: white; 
  text-align: center; 
  
`
// const StyledFlatList = styled(FlatList as new () => FlatList<ProductListProps>)`
//   padding-top: 10px; 
//   background-color: #2A2A2A;
// `
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
const ItemList = styled.TouchableOpacity`
  height: 80px; 
  background-color: #2A2A2A;
`;
export default ProductListScreen;