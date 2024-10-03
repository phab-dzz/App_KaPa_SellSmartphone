import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BadgeExample from '../components/BadgeExample'
import ItemBook from '../components/ItemBook'
import TimerDialog from '../components/TimerDialog'
export default function Heart() {
    return (
        <View style={styles.container}>
            {/* <BadgeExample />
            <ItemBook /> */}
            <TimerDialog />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justfyContent: 'center',
        alignItems: 'center'
    }
})
