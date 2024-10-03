import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AudiobookItem from '../components/AudiobookItem';
const books = [
    { id: '1', title: 'Giao Tiếp Với Thiên Nhiên', image: require('../../img/book1.png') },
    { id: '2', title: 'Trải Nghiệm Khách Hàng', image: require('../../img/book2.png') },
    { id: '3', title: 'Osho: Cuộc sống & Chân lý', image: require('../../img/book3.png') },
    { id: '4', title: 'Sức Mạnh Của Sự Tĩnh Lặng', image: require('../../img/book4.png') },

];
export default function Cart() {
    return (
        <AudiobookItem />
        // <View style={styles.container}>
        //     {/* <BadgeExample />
        // <ItemBook /> */}
        //     {/* <Text>Heart</Text> */}
        // </View>
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
