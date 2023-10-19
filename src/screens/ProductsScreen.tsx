import { View, Text, FlatList, StyleSheet } from 'react-native';
import products from "./../data/products"
import Product from '../components/ProductsScreen/Product';

function ProductsScreen()
{

 return (
  <View style={styles.container}>
   <FlatList
    data={products}
    renderItem={({ item }) => <Product item={item} />}
    style={styles.list}
    contentContainerStyle={styles.listContainer}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 list: {
  // flex: 1,
  width: "100%",
  paddingVertical: 30,
 },
 listContainer: {
  gap: 10,
  justifyContent: "center",
  alignContent: "center"
 }
})


export default ProductsScreen;