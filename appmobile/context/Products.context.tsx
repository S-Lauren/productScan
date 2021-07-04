import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';




type ProductStateContextProps = {
  products: any;
  setProducts: (product: Product) => Product[];
};

type Product = {
  _id: number;
  product_name: string;
  image_front_thumb_url: string;
  nutriscore_score: number;
  image_url: string
  ingredients_text: string;
  code: string;
};


const ProductContext = React.createContext({} as ProductStateContextProps);

const ProductProvider: React.FC = (props) => {
  const [products, setProducts] = React.useState<Product[]>([]);



  const value = React.useMemo(
    () => ({
      setProducts,
      products,

    }),
    [setProducts, products],
  );
  return <ProductContext.Provider value={value} {...props} />;
};
function useProductList(): ProductStateContextProps {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useReminder must be used within a ReminderProvider');
  }
  return context;
}
export { useProductList, ProductProvider };