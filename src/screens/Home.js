import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import BookScreen from '../components/BookScreen'
import screenrank from '../components/screenrank'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function Home() {
    return (
        <Stack.Navigator initialRouteName="Book" >
            <Stack.Screen name="Book" component={BookScreen} options={{ headerShown: false }} />
            <Stack.Screen name="rank" component={screenrank} options={{ headerShown: false }} />

        </Stack.Navigator>
        // <View style={styles.container}>
        //     <BookScreen />

        // </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b6b7f7'

    },
});