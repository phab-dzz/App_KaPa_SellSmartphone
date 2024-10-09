import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BookScreen from '../components/BookScreen'
import AudiobookItem from '../components/AudiobookItem'

export default function Account() {
    return (
        // <AudiobookItem />
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