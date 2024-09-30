import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import ItemBookrank from './ItemBookrank';
const books = [
    { id: '1', title: 'Giao Tiếp Với Thiên Nhiên', image: require('../../img/book1.png') },
    { id: '2', title: 'Osho: Cuộc sống & Chân lý', image: require('../../img/book2.png') },
    { id: '3', title: 'Trải Nghiệm Khách Hàng', image: require('../../img/book3.png') },
    { id: '4', title: 'Sức Mạnh Của Sự Tĩnh Lặng', image: require('../../img/book4.png') },
    { id: '5', title: 'Người đàn bà trong tôi', image: require('../../img/book5.png') },

];

export default function screenrank() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 20, gap: 10, paddingLeft: 15 }}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        backgroundColor: 'gray',
                        borderRadius: 50,
                        marginTop: 15,
                        width: 30,
                        height: 30,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>Bảng xếp hạng</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff' }}>Top sách nói thịnh hành</Text>

            </View>
            <View style={{
                flex: 60, backgroundColor: '#fff', borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <FlatList
                    data={books}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ marginTop: 25 }}>
                            <ItemBookrank url={item.image} title={item.title} />
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: 'center', alignItems: 'center',
                    }}
                />

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b6b7f7'
    },
})

