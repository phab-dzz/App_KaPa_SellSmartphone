import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlide = () => {
  const data = [
    { title: 'Hình ảnh 1', image: require('../../assets/BookScreen/profile.png') },
    { title: 'Hình ảnh 2', image: require('../../assets/BookScreen/profile.png') },
    { title: 'Hình ảnh 3', image: require('../../assets/BookScreen/profile.png') },
  ];

  const animatedValue = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const scale = animatedValue.interpolate({
      inputRange: data.map((_, i) => i),
      outputRange: data.map((_, i) => (i === index ? 1.1 : 0.9)),
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.slide, { transform: [{ scale }] }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </Animated.View>
    );
  };

  const handleSnapToItem = (index) => {
    Animated.timing(animatedValue, {
      toValue: index,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={handleSnapToItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: screenWidth,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%', // Chiều cao của hình ảnh
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginTop: 10,
  },
});

export default ImageSlide;
