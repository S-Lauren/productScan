import * as React from 'react'
import { FlatList, ListRenderItem, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import useFetch from '../hooks/useFetch'
import ItemList from '../shared/ItemList'
import { ProductListScreenProp } from './Navigator/MainNavigator'

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

const ProductListScreen: React.FC<ProductListScreenProp> = ({ navigation }) => {

  const [value, setValue] = React.useState<string>("")
  const { data, isLoading, list } = useFetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${value}&search_simple=1&action=process&json=1`, {})

  if (!list && data && isLoading) {
    <Text>Loading...</Text>
  }

  const renderItem: ListRenderItem<ProductListProps> = ({ item }) => <ItemList onPress={() => navigation.navigate("ProductDetailScreen", { item })} title={item.product_name} source={{ uri: `${item.image_front_thumb_url}` }} score={item.nutriscore_score} />;

  return (
    <>
      <FormContainer>
        <Input clearButtonMode='always' placeholder="Search product" autoCapitalize="none" value={value} onChangeText={(text) => setValue(text)} />
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

export default ProductListScreen;