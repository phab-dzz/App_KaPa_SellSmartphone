import 'react-native-gesture-handler'; // Import bắt buộc
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện vector icons


import MyTabs from './src/navigate/MyTabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  const hanleClick = navigation => {
    navigation.navigate("Details");
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator> */}
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
    // <View>
    //   <Text>hello</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1eaaba',


  },
});
