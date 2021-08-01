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
    name
    image
    score
  }
}
`;


const HistoricScreen: React.FC<HistoricScreenProp> = ({ navigation }) => {

  const { data, loading, error } = useQuery(FETCH_PRODUCTS)

  if (loading) return <Text> Loading... </Text>
  if (error) return <Text> Seems Like An Error occured... </Text>
  const renderItem: ListRenderItem<ProductListProps> = ({ item }) => <ItemList onPress={() => navigation.navigate("ProductDetailScreen", { item })} title={item.name} source={{ uri: `${item.image}` }} score={item.score} />;

  return (
    <>
      <Title>All products scanned </Title>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2A2A2A" }}>
        <FlatList data={data.products} renderItem={renderItem} />
      </SafeAreaView>
    </>
  )
}

const Title = styled.Text`
  font-size: 24px;
  margin-top: 10px;
  margin-left: 10px; 
  font-weight: bold; 
`;


export default HistoricScreen;