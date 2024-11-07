import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

// Kích thước của ảnh giữa
const centerImageWidth = 220;
const centerImageHeight = 290;

const images = [
  {
    uri: 'https://s3-alpha-sig.figma.com/img/7793/2fde/cf7795a9489ed315dae2bcf7375f0c7e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMF8uFRAubG7XYSTTPupI~eZlMzC0O-m9-t29t3ey61DtP8HgWIDlS1FwTv85XedWUbpsrN8ggdgYsaz0UqMdOqbFyKscHkBoZZbsTID9hSjAE82uWuO545ykRzHA7WSQDKopnZlUqHQKtOlj0OnPVoa4iWuExTAAKrYjHDCrVCa3oXLiFhBBelI3MCDR-Vw1~5ua2ci~iU8esUgo2NE6G2duq287NtRzbZhWQOuIXMe6XtZdWr~L64uz381zx9YUoVc0Ns9DKmJrkrtufZPNV7mXyUQnb4Qr1mCYrnaJbYLsnvxkN2C3rrgCQt~4G44cD0afUujSvvbLb~mEwwP5w__',
    description: 'Sách nói mới',
  },
  {
    uri: 'https://s3-alpha-sig.figma.com/img/7793/2fde/cf7795a9489ed315dae2bcf7375f0c7e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMF8uFRAubG7XYSTTPupI~eZlMzC0O-m9-t29t3ey61DtP8HgWIDlS1FwTv85XedWUbpsrN8ggdgYsaz0UqMdOqbFyKscHkBoZZbsTID9hSjAE82uWuO545ykRzHA7WSQDKopnZlUqHQKtOlj0OnPVoa4iWuExTAAKrYjHDCrVCa3oXLiFhBBelI3MCDR-Vw1~5ua2ci~iU8esUgo2NE6G2duq287NtRzbZhWQOuIXMe6XtZdWr~L64uz381zx9YUoVc0Ns9DKmJrkrtufZPNV7mXyUQnb4Qr1mCYrnaJbYLsnvxkN2C3rrgCQt~4G44cD0afUujSvvbLb~mEwwP5w__',
    description: 'Top 10 sách bán chạy',
  },
  {
    uri: 'https://s3-alpha-sig.figma.com/img/7793/2fde/cf7795a9489ed315dae2bcf7375f0c7e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMF8uFRAubG7XYSTTPupI~eZlMzC0O-m9-t29t3ey61DtP8HgWIDlS1FwTv85XedWUbpsrN8ggdgYsaz0UqMdOqbFyKscHkBoZZbsTID9hSjAE82uWuO545ykRzHA7WSQDKopnZlUqHQKtOlj0OnPVoa4iWuExTAAKrYjHDCrVCa3oXLiFhBBelI3MCDR-Vw1~5ua2ci~iU8esUgo2NE6G2duq287NtRzbZhWQOuIXMe6XtZdWr~L64uz381zx9YUoVc0Ns9DKmJrkrtufZPNV7mXyUQnb4Qr1mCYrnaJbYLsnvxkN2C3rrgCQt~4G44cD0afUujSvvbLb~mEwwP5w__',
    description: 'Podcast mới',
  },
  // Thêm các ảnh và mô tả khác ở đây
];

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Trạng thái chỉ số ảnh đang hoạt động
  const animatedValues = useRef(
    images.map(() => ({
      translateY: new Animated.Value(20),
      opacity: new Animated.Value(0),
    }))
  ).current;

  const renderItem = ({ item, index }) => {
    const { translateY, opacity } = animatedValues[index];

    // Cập nhật animation khi ảnh ở giữa
    Animated.timing(translateY, {
      toValue: activeIndex === index ? -15 : 20,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: activeIndex === index ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Animated.View
          style={[
            styles.textContainer,
            { opacity, transform: [{ translateY }] },
          ]}
        >
          <View style={styles.iconWithText}>
          <Image source={require("../../assets/slide/saoSlide.png")} style={styles.icon} />
          <Text style={styles.text}>{item.description}</Text>
        </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={centerImageWidth}
      layout="default"
      inactiveSlideScale={0.8}
      inactiveSlideOpacity={0.5}
      onSnapToItem={(index) => setActiveIndex(index)} // Cập nhật chỉ số khi kéo
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end', // Đặt nội dung ở dưới cùng
  },
  image: {
    width: centerImageWidth,
    height: 310,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    backgroundColor: 'white', // Nền màu trắng
    padding: 10, // Khoảng cách bên trong
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',

  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 27,  // Kích thước của hình ảnh sao
    height: 20,
    marginRight: 5,  // Khoảng cách giữa icon và text
  },
});

export default MyCarousel;
