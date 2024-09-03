import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
export default function Home() {
    return (

        <View style={styles.container}>
            <TouchableOpacity >
                <Text>Home Screen</Text>
            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});