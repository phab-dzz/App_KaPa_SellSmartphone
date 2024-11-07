import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import BookScreen from '../components/BookScreen'
import screenrank from '../components/ScreenRank'
import CartBookItem from '../components/CartBookItem'
import  AudioBookScreen from '../components/Audiobook'
import AccountScreen from './Account'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function Home() {
    return (
        <Stack.Navigator initialRouteName="Book" >
            <Stack.Screen name="Book" component={BookScreen} options={{ headerShown: false }} />
            <Stack.Screen name="rank" component={screenrank} options={{ headerShown: false }} />
            <Stack.Screen name="CartBookItem" component={CartBookItem} options={{ headerShown: false }} />
            <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
            <Stack.Screen 
                name="AudioBook" 
                component={AudioBookScreen} 
                options={{ 
                headerShown: false,
                tabBarStyle: { display: 'none' },  // Ẩn tab bar khi chuyển đến AudioBook
                }} 
            />
        </Stack.Navigator>

    )
}
