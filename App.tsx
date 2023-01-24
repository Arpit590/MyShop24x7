/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native'
import HomeScreen from './src/components/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/components/ProfileScreen';
import HomeIcon from './src/assets/home.svg';
import ProfileIcon from './src/assets/profile.svg';
import CartScreen from './src/components/CartScreen';
import ProductDetails from './src/components/ProductDetails';
import HelpCenter from './src/components/HelpCenter';
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import SplashScreen from './src/components/SplashScreen';
import CheckoutScreen from './src/components/CheckoutScreen';
import { Provider } from 'react-redux';
import { store } from './src/components/redux/store';
import DeliveryScreen from './src/components/DeliveryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Custom" component={CustomNavigator} />
          <Stack.Screen name="Cart" component={CartScreen}/>
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
          <Stack.Screen name="ProductDetails" component={ProductDetails}/>
          <Stack.Screen name="HelpCenter" component={HelpCenter}/>
          <Stack.Screen name="Delivery" component={DeliveryScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const CustomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 60},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <HomeIcon height={'30'} width={'30'} />
              <Text
                style={{
                  color: focused ? '#000000' : 'grey',
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 4,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ProfileIcon height={'30'} width={'30'} />
              <Text
                style={{
                  color: focused ? '#000000' : 'grey',
                  fontSize: 10,
                  fontWeight: '400',
                  marginTop: 4,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
