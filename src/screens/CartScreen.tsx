import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import products from '../data/products'
import CartItem from '../components/CartScreen/CartItem'
import { product } from '../types/product'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/RootStackParamList'
import { useSelector } from 'react-redux'
import { RootState } from "./../store/index"

export type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

function CartScreen({ }: CartScreenProps)
{
 const ids = useSelector((state: RootState) => state.cart.ids);

 const cartItems: any = ids.map((id: number) => products.find((product) => product.id === id));

 return (
  <View style={styles.container}>
   <Text style={styles.title}>cart</Text>
   {
    cartItems.length > 0 ?
     <FlatList
      data={cartItems}
      renderItem={({ item }) => { console.log(item); return <CartItem item={item} /> }}
      contentContainerStyle={styles.listContainer}
     /> :
     <Text>Cart is empty</Text>
   }

  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 title: {
  textAlign: "center",
  marginVertical: 20,
  fontSize: 24,
 },
 listContainer: {
  gap: 10,
  justifyContent: "center",
  alignContent: "center"
 }
})

export default CartScreen