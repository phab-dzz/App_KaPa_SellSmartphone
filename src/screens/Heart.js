import React from 'react'
import { View, Text } from 'react-native'
import BadgeExample from '../components/BadgeExample'
import ItemBook from '../components/ItemBook'
export default function Heart() {
    return (
        <View style={{ flex: 1 }}>
            <BadgeExample />
            <ItemBook />
        </View>
    )
}
