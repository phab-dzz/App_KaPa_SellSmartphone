import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ZoomableView from './ZoomableView';
import BadgeExample from './BadgeExample';
import MySwiper from './Slide';
import ItemBook from './ItemBook';
import Podcourse from './Podcourse';
import BookList from './BookList';
import BooksForYou from './BooksForYou';


import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
const books = [
    { id: '1', title: 'Giao Tiếp Với Thiên Nhiên',author: 'Khang Dinh', image: require('../../img/book1.png') },
    { id: '2', title: 'Osho: Cuộc sống & Chân lý',author: 'Khang Dinh', image: require('../../img/book2.png') },
    { id: '3', title: 'Trải Nghiệm Khách Hàng',author: 'Khang Dinh', image: require('../../img/book3.png') },
    { id: '4', title: 'Sức Mạnh Của Sự Tĩnh Lặng',author: 'Khang Dinh', image: require('../../img/book4.png') },
    { id: '5', title: 'Người đàn bà trong tôi',author: 'Khang Dinh', image: require('../../img/book5.png') },

];



export default function BookScreen({ navigation }) {
    return (
        <LinearGradient
        colors={[
            '#504B72', 
            'rgba(127, 122, 206, 0.9975)', 
            'rgba(152, 153, 244, 0.995)', 
            'rgba(178, 184, 249, 0.9925)', 
            '#FBFBFB', 
            'rgba(254, 254, 254, 0.99)'
            ]}
            start={{ x: 0, y: 0 }} // Điểm bắt đầu
            end={{ x: 1, y: 1 }}   // Điểm kết thúc
            style={styles.gradient}
        >


            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.row}>
                        <Image source={require("../../assets/BookScreen/logo.png")}/>
                        <Text style={styles.logo}>KaPaBooks</Text>
                     </TouchableOpacity>
                   
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Account')}
                    >
                        <Image style={styles.profile} source={require("../../assets/BookScreen/profile.png")}/>
                    </TouchableOpacity>
                </View>
                <ScrollView vertical showsVerticalScrollIndicator={false} >
                    <View style={{
                        marginBottom: 5,
                        height: 60,

                    }}>
                        <BadgeExample />
                    </View>
                    <View style={{ height: 370, marginTop: 20 }}>
                        <MySwiper/>
                    </View>

                    {/* <View style={{ height: 250, marginTop: 20 }}>
                 
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mainBookScroll}>

                            {books.map((book) => {
                                return (
                                    <TouchableOpacity style={styles.bookCard}>
                                        <ZoomableView image={book.image} title={book.title} />
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View> */}

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
                            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}

                            onPress={() => navigation.navigate('rank')}
                        >
                            {/* <Image source={{uri: 'https://img.icons8.com/ios/452/reading.png'}} style={{ width: 24, height: 24 }} /> */}

                            <Text style={styles.sectionTitle}>Top sách thịnh hành</Text>
                            <Image source={require("../../assets/BookScreen/cup.png")} style={{ width: 20, height: 20, marginLeft: -80 }} />
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </TouchableOpacity>


                        <FlatList
                            horizontal
                            data={books}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={styles.popularBookCard}
                                    onPress={() => navigation.navigate('CartBookItem', { book: item })}
                                >
                                    <View style={styles.bookNumberContainer}>
                                        <Text style={styles.bookNumberText}>{index + 1}</Text>
                                    </View>
                                    <Image source={item.image} style={styles.popularBookImage} />
                                    {/* <Text style={styles.popularBookTitle}>{item.title}</Text> */}
                                </TouchableOpacity>
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    {/* Podcourse Section */}
                        <View style={styles.podcourseSection}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}
                                // onPress={() => navigation.navigate("")}
                            >
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={require("../../assets/Podcourse/postcart-black.png")} style={{ width: 60, height: 80,   }} />
                                    <Text style={styles.sectionTitle}>Podcourse nổi bật</Text>
                                </View>
                                
                                <Ionicons name="chevron-forward" size={24} color="black" />
                            </TouchableOpacity>

                            <Podcourse />
                        </View>

                    <View style={{ marginTop: 40, paddingLeft: 16, }}>
                        <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}
                        // onPress={() => navigation.navigate("")}
                        >
                            <Text style={styles.sectionTitle}>Mới xuất bản</Text>
                           
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </TouchableOpacity>
                        
                        <BookList />
                       

                    </View>
                    <View>
                        <TouchableOpacity
                         onPress={() => navigation.navigate('rank')}
                        >

                        <Image source={require('../../assets/BookScreen/top20.png')} style={styles.imageTop20} />
                        <View style={styles.titleContainer}>
                        <View>
                            <Text style={styles.top20Title}>Top 20</Text>
                            <Text style={styles.top20Author}>Sách nói thịnh hành</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="white" style={{justifyContent: 'center', marginTop: 50}} />
                        

                         </View>
                         </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 40, paddingLeft: 16, paddingBottom: 100 }}>
                        <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}
                        // onPress={() => navigation.navigate("")}
                        >
                            <Text style={styles.sectionTitle}>Dành riêng cho bạn</Text>
                            <Image source={require("../../assets/BookScreen/heartmini.png")} style={{ width: 20, height: 20, marginLeft: -80 }} />
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </TouchableOpacity>
                        
                        <BooksForYou />
                       

                    </View>

                    
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1, 

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        marginTop: 20,
        flex: 1,
        marginBottom: 0,
        // backgroundColor: '#b6b7f7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 30,
        marginBottom: 10,
        // backgroundColor: '#6200ee',
    },
    logo: {
       
		color: "#E3E7EB",
		fontSize: 15,
		fontWeight: "bold",
        marginLeft: 10,

    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 14,
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
        marginTop: 0,
        paddingLeft: 16,
        gap: 16,
    },
    bookNumberContainer: {
        position: 'absolute',
        height: 45,
        width: 45,
        top: -5,
        left: -12,
        backgroundColor: '#007280FA',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 1, 
    },
    bookNumberText: {
        color: 'white',
        fontSize: 26,
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    popularBookCard: {
        width: 130,
        height:200,
        marginLeft: 15,
        marginTop: 7,
        borderRadius: 8, // Bo góc để bóng trông tự nhiên hơn
        // Đổ bóng trên iOS
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6,
        // Đổ bóng trên Android
        elevation: 8,
    },
    popularBookImage: {
        width: 120,
        height: 180,
        borderRadius: 10,
    },
    popularBookTitle: {
        marginTop: 8,
        fontSize: 14,
        textAlign: 'center',
    },
    podcourseSection: {
        marginLeft: 10,
        marginTop: 30,
    },
    popularPodcourseCard: {
        width: 120,
        marginRight: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        alignItems: 'center', // Căn giữa nội dung
        marginTop: 0
     
    },
    popularPodcourseImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    podcourseTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 0, 
    },
    podcourseAuthor: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 5, // Khoảng cách giữa tên tác giả và ảnh
    },
    playButton: {
        position: 'absolute',
        top: '50%', // Căn giữa theo chiều dọc
        left: '50%', // Căn giữa theo chiều ngang
        transform: [{ translateX: -20 }, { translateY: -20 }], // Định vị nút play
    },
    imageTop20: {
        width: '90%',
        height: 290,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 330,
        bottom: 20,
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        borderBottomLeftRadius: 14,
        justifyContent: 'center',
        borderBottomRightRadius: 14,
    },
    top20Title: {
        fontSize: 40,
        width: 230,
        paddingLeft: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 5, 
        color: 'white',
    },
    top20Author: {
        fontSize: 30,
        width: 230,
        paddingLeft: 9,
        fontWeight: 'normal',
        textAlign: 'left',
        color: 'white',
        marginBottom: 10,
    },

});
