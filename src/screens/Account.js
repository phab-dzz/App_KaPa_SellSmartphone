import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BookScreen from '../components/BookScreen'


export default function Account() {
    return (

        <View style={styles.container}>
            <Text>Account</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A6FB1',
        justifyContent: 'center',
        alignItems: 'center',
    },
})