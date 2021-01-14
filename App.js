

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SideDrawerScreens from './src/Screens/SideDrawerScreens';
import CategoryScreen from './src/Screens/CategoryScreen';
import ProfileScreen from './src/Screens/ProfileScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenStack = ({ navigation }) => {
  return (
    
    <Stack.Navigator headerMode="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
          
  )
}

        
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login" drawerContent={props => <SideDrawerScreens{...props} />}>
          <Drawer.Screen name="Main" component={ScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

       

export default App;
