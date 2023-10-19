// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen"
import ProductsScreen from './src/screens/ProductsScreen';
import { RootStackParamList } from './src/types/RootStackParamList';
import CartScreen from './src/screens/CartScreen';
// import { CartContextProvider } from './src/store/cart-context';
import { Provider } from "react-redux"
import store from './src/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App()
{
  return (
    // <CartContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </CartContextProvider>
  );
}

export default App;