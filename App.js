import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyTabs from './src/navigate/MyTabs';
import Login from './src/screens/Login'; // Capitalize component name
import Registration from './src/screens/Registration'; // Capitalize component name
import CartBookItem from './src/components/CartBookItem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
          <Stack.Screen name="CartBookItem" component={CartBookItem} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1eaaba',
  },
});
