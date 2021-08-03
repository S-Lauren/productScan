import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import * as React from 'react'
import { Text, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ItemList from '../shared/ItemList';
import { HistoricScreenProp } from './Navigator/MainNavigator';
import { ProductListProps } from './ProductListScreen';


const FETCH_PRODUCTS = gql`
query products {
  products {
    _id
    name
    image
    score
    ingredients
  }
}
`;


const HistoricScreen: React.FC<HistoricScreenProp> = ({ navigation }) => {

  const { data, loading, error } = useQuery(FETCH_PRODUCTS, {
    fetchPolicy: 'no-cache',
    pollInterval: 500,
  })


  if (loading) return <Text> Loading... </Text>
  if (error) return <Text> Seems Like An Error occured... </Text>

  const renderItem: ListRenderItem<ProductListProps> = ({ item }) => <ItemList onPress={() => navigation?.navigate("ProductDetailScreen", { item })} title={item.name} source={{ uri: `${item.image}` }} score={item.score} ingredients={item.ingredients} />;

  return (
    <>
      <Container>
        <Title>All products scanned </Title>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A2A2A" }}>
          <FlatList data={data.products} renderItem={renderItem} keyExtractor={item => item._id + "K"} />
        </SafeAreaView>
      </Container>
    </>
  )
}

const Title = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px; 
  font-weight: normal; 
  color: white; 
`;
const Container = styled.View`
  flex: 1; 
  height: 50px; 
  background-color: #2A2A2A;
`;



export default HistoricScreen;