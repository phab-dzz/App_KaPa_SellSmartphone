import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ItemBookrank from '../components/ItemBook';

const books = [
    { id: '1', title: 'Giao Tiếp Với Thiên Nhiên',author: 'Khang Dinh', image: require('../../img/book1.png') },
    { id: '2', title: 'Osho: Cuộc sống & Chân lý',author: 'Khang Dinh', image: require('../../img/book2.png') },
    { id: '3', title: 'Trải Nghiệm Khách Hàng',author: 'Khang Dinh', image: require('../../img/book3.png') },
    { id: '4', title: 'Sức Mạnh Của Sự Tĩnh Lặng',author: 'Khang Dinh', image: require('../../img/book4.png') },
    { id: '5', title: 'Người đàn bà trong tôi',author: 'Khang Dinh', image: require('../../img/book5.png') },

];

export default function LibraryScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerbox}>
                                <Ionicons name="chevron-back-outline" size={24} color="#fff" />
                            </TouchableOpacity>
                <Text style={styles.headerText}>Thư viện</Text>
                
            </View>

            

            {/* Book List */}
            <View style={styles.bookListContainer}>
            <View style={styles.filterSortRow}>
                <Text style={styles.filterText}>Tất cả ({books.length})</Text>
                <TouchableOpacity>
                    <Text style={styles.sortText}>Sắp xếp</Text>
                </TouchableOpacity>
            </View>
                <FlatList
                    data={books}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('AudioBook', { book: item })}
                        style={styles.bookItem}>
                            <ItemBookrank url={item.image} title={item.title} author={item.author} />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b6b7f7'
    },
    header: {
        flex: 20,
        paddingLeft: 15,
    },
    headerbox: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#878787',
        //thêm độ trong suất cho background
        opacity: 0.8,

    },
    headerText: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
   
    filterSortRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    filterText: {
        fontSize: 16,
        fontWeight: '600',
    },
    sortText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4a90e2',
    },
    bookListContainer: {
        flex: 80,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bookItem: {
        marginTop: 25,
    },
    flatListContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
