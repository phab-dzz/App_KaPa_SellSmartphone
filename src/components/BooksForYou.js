import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const data = [
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
    // Thêm nhiều sách nếu cần];
]

// Chia dữ liệu thành các nhóm 3 sách
const groupData = (data) => {
  const grouped = [];
  for (let i = 0; i < data.length; i += 2) {
    grouped.push(data.slice(i, i + 2));
  }
  return grouped;
};

const BookItem = ({ title, author, image, onPress }) => (
  <View style={styles.bookItem}>
    <TouchableOpacity onPress={onPress}>
    

    <Image source={image } style={styles.bookImage} />
    <View style={styles.tag}>
        <Text style={styles.tagText} >1 THẺ KAPA</Text>
    </View>
    </TouchableOpacity>
  </View>
);

const BookColumn = ({ books }) => {
    const navigation = useNavigation(); // Sử dụng useNavigation để lấy navigation
  
    return (
      <View style={styles.bookColumn}>
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            onPress={() => navigation.navigate('AudioBook')} // Chuyển hướng khi ấn vào sách
          />
        ))}
      </View>
    );
  };

const BooksForYou = () => {
  const groupedData = groupData(data);

  return (
    <FlatList
      data={groupedData}
      renderItem={({ item }) => <BookColumn books={item} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      contentContainerStyle={styles.flatList}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  tag: {
    backgroundColor: '#FFB74D',
    position: 'absolute',
    borderRadius: 4,
    bottom: -12,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'center',
    marginBottom: 5,
},
tagText: {
    color: 'brown',
    fontSize: 12,
    fontWeight: 'bold',
},
  bookColumn: {
    marginRight: 15,
  },
  bookItem: {
    width: 120,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8, // Bo góc để bóng trông tự nhiên hơn
    // Đổ bóng trên iOS
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6,
    // Đổ bóng trên Android
    elevation: 8,
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  bookAuthor: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
 
});

export default BooksForYou;
