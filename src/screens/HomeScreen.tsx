import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, screens } from '../types/RootStackParamList';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeScreenProps)
{

 const navigateToProducts = () => navigation.navigate('Products')
 const navigateToCart = () => navigation.navigate('Cart')

 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 15 }}>
   <Text>Home Screen</Text>
   <Button
    title='visite our products'
    onPress={navigateToProducts}
   />
   <Button
    title='visite your cart'
    onPress={navigateToCart}
   />
  </View>
 );
}


export default HomeScreen;