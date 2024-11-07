import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const books = [
    { id: '1', title: 'Vượt Lên Trật Tự: 12 Quy Tắc Cho Cuộc Sống', author: 'Jordan B. Peterson', image: require('../../assets/BookList/book1.png') },
    { id: '2', title: 'Anne Tóc Đỏ Dưới Mái Nhà Bạch Dương', author: 'Lucy Maud Montgomery', image: require('../../assets/BookList/book2.png') },
    { id: '3', title: 'Tư Duy Đặt Cược: Quyết Định Sáng Suốt', author: 'Annie Duke', image: require('../../assets/BookList/book3.png') },
    { id: '4', title: 'Ngủ Lâu Giữa Đám Người', author: 'Sachi Luwis', image: require('../../assets/BookList/book4.png') },
    { id: '5', title: 'Phật Tâm', author: 'Nhã Nam', image: require('../../assets/BookList/book5.png') },
    { id: '6', title: 'Câu Chuyện Feynman', author: 'Đinh Hữu', image: require('../../assets/BookList/book1.png') },
    { id: '7', title: 'Vượt Lên Trật Tự: 12 Quy Tắc Cho Cuộc Sống', author: 'Jordan B. Peterson', image: require('../../assets/BookList/book1.png') },
    { id: '8', title: 'Anne Tóc Đỏ Dưới Mái Nhà Bạch Dương', author: 'Lucy Maud Montgomery', image: require('../../assets/BookList/book2.png') },
    { id: '9', title: 'Tư Duy Đặt Cược: Quyết Định Sáng Suốt', author: 'Annie Duke', image: require('../../assets/BookList/book3.png') },
    { id: '10', title: 'Ngủ Lâu Giữa Đám Người', author: 'Sachi Luwis', image: require('../../assets/BookList/book4.png') },
    { id: '11', title: 'Phật Tâm', author: 'Nhã Nam', image: require('../../assets/BookList/book5.png') },
    { id: '12', title: 'Câu Chuyện Feynman', author: 'Đinh Hữu', image: require('../../assets/BookList/book1.png') },
    // Thêm nhiều sách nếu cần
];

// Hàm chia dữ liệu thành các nhóm 3 mục
const chunkArray = (array, size) => {
    return array.reduce((acc, _, index) => {
        if (index % size === 0) acc.push(array.slice(index, index + size));
        return acc;
    }, []);
};

const BookList = () => {
    const bookRows = chunkArray(books, 3);

    const renderRow = ({ item }) => (
        <View style={styles.row}>
            {item.map((book) => (
                <TouchableOpacity key={book.id} style={styles.bookCard}>
                    <Image source={book.image} style={styles.bookImage} />
                    <View style={styles.bookInfo}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText} >1 THẺ KAPA</Text>
                        </View>
                        <Text style={styles.bookTitle} numberOfLines={2}>{book.title}</Text>
                        <Text style={styles.bookAuthor}>{book.author}</Text>
                    </View>
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>...</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <FlatList
            horizontal
            data={bookRows}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderRow}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
        />
    );
};

const styles = StyleSheet.create({
    flatList: {
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'column',
        marginRight: 15,
    },
    bookCard: {
        flexDirection: 'row', // Đặt ngang
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: 300, // Đặt chiều rộng cố định cho thẻ sách
    },
    bookImage: {
        width: 70,
        height: 100,
        borderRadius: 8,
        marginRight: 10, // Tạo khoảng cách giữa hình ảnh và thông tin sách
    },
    bookInfo: {
        flex: 1, // Để thông tin sách chiếm hết không gian còn lại
    },
    tag: {
        backgroundColor: '#FFB74D',
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    tagText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    bookTitle: {
        fontSize: 14,
        width: 180,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        flexWrap: 'wrap', // Cho phép xuống dòng
        height: 'auto', // Tự động điều chỉnh chiều cao theo nội dung
    },
    bookAuthor: {
        fontSize: 12,
        color: '#666',
    },
    moreButton: {
        padding: 5,
        marginLeft: 10,
    },
    moreButtonText: {
        fontSize: 18,
        color: '#666',
    },
});

export default BookList;
