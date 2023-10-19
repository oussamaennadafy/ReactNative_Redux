import React, { useContext } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { product } from '../../types/product'
import { useNavigation } from '@react-navigation/native'
import { CartScreenProps } from "./../../screens/CartScreen"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/slices/cart-slice'

function Product({ item }: { item: product })
{
 const dispatch = useDispatch();

 const addToCart = () =>
 {
  dispatch(cartActions.addToCart({ id: item.id }))
 }

 return (
  <View style={styles.card}>
   <Text style={styles.title}>{item.name}</Text>
   {
    <Button
     title='add to cart'
     onPress={addToCart}
    />
   }
  </View>
 )
}

const styles = StyleSheet.create({
 card: {
  flex: 1,
  backgroundColor: "green",
  width: "80%",
  alignSelf: "center",
  minHeight: 200,
  alignItems: "center",
  justifyContent: "center",
  gap: 20
 },
 title: {
  fontSize: 20,
  fontWeight: "600",
  color: "red",
  textAlign: "center",
 }
})

export default Product