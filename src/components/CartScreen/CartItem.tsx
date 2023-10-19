import React, { useContext } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { product } from '../../types/product'
import { useDispatch } from "react-redux"
import { cartActions } from './../../store/slices/cart-slice'

function Product({ item }: { item: product })
{

 const dispatch = useDispatch();

 const handlePress = () =>
 {
  dispatch(cartActions.removeFromCart({ id: item.id }))
 }

 return (
  <View style={styles.card}>
   <Text style={styles.title}>{item.name}</Text>
   <Button
    title='remove from cart'
    onPress={handlePress}
   />
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