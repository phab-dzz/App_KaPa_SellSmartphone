import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ZoomableView from './ZoomableView';
import BadgeExample from './BadgeExample';
import ItemBook from './ItemBook';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
const books = [
    { id: '1', title: 'Giao Tiếp Với Thiên Nhiên', image: require('../../img/book1.png') },
    { id: '2', title: 'Osho: Cuộc sống & Chân lý', image: require('../../img/book2.png') },
    { id: '3', title: 'Trải Nghiệm Khách Hàng', image: require('../../img/book3.png') },
    { id: '4', title: 'Sức Mạnh Của Sự Tĩnh Lặng', image: require('../../img/book4.png') },
    { id: '5', title: 'Người đàn bà trong tôi', image: require('../../img/book5.png') },

];

export default function BookScreen({ navigation }) {
    return (
        <LinearGradient
            // Màu sắc bắt đầu và kết thúc của gradient
            colors={['#007380', '#108794', '#1eaaba']}
            style={styles.gradient}
        >
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.logo}>KaPeBooks</Text>
                    <TouchableOpacity>
                        <Text style={styles.profileButton}>K</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView vertical showsVerticalScrollIndicator={false} >
                    <View style={{
                        marginBottom: 5,
                        height: 60,

                    }}>
                        <BadgeExample />
                    </View>

                    <View style={{ height: 250 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mainBookScroll}>

                            {books.map((book) => {
                                return (
                                    <TouchableOpacity style={styles.bookCard}>
                                        <ZoomableView image={book.image} title={book.title} />
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* <FlatList
                    horizontal
                    data={books}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.bookCard}>

                            <ZoomableView image={item.image} title={item.title} />
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                /> */}




                    {/* Popular Books Section */}
                    <View style={styles.popularBooksSection}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}

                            onPress={() => navigation.navigate('rank')}
                        >
                            {/* <Image source={{uri: 'https://img.icons8.com/ios/452/reading.png'}} style={{ width: 24, height: 24 }} /> */}

                            <Text style={styles.sectionTitle}>Top sách thịnh hành</Text>
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </TouchableOpacity>


                        <FlatList
                            horizontal
                            data={books}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.popularBookCard}>
                                    <Image source={item.image} style={styles.popularBookImage} />
                                    <Text style={styles.popularBookTitle}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: 32, paddingLeft: 16, }}>
                        <Text style={styles.sectionTitle}>Mới xuất bản</Text>
                        <FlatList

                            data={books}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{}}>
                                    <ItemBook url={item.image} title={item.title} />
                                </TouchableOpacity>
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                        />

                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1, // Chiếm toàn bộ không gian

    },
    container: {
        marginTop: 20,
        flex: 1,
        // backgroundColor: '#b6b7f7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
        // backgroundColor: '#6200ee',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileButton: {
        fontSize: 18,

        backgroundColor: '#ff4081',
        borderRadius: 20,
        padding: 10,
    },
    mainBookScroll: {
        marginBottom: 0,
        paddingLeft: 20,

        height: 50,

    },
    bookCard: {
        height: '100%',
        marginRight: 10
    },
    bookImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    bookTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    popularBooksSection: {
        marginTop: 32,
        paddingLeft: 16,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    popularBookCard: {
        width: 120,
        marginRight: 16,
    },
    popularBookImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    popularBookTitle: {
        marginTop: 8,
        fontSize: 14,
        textAlign: 'center',
    },
});
