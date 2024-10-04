import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login'; 
import RegistrationScreen from './src/screens/Registration';
import AudioBookScreen from './src/screens/Audiobook';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AudioBook">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AudioBook" component={AudioBookScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
