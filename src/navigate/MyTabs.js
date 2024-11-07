import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Animated, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import Account from "../screens/Account";
import Cart from '../screens/Cart';
import Heart from '../screens/LibraryScreen';
import AudioBookScreen from '../components/Audiobook';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [animation] = useState(new Animated.Value(0)); // Khởi tạo giá trị animation

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'clipboard-outline' : 'clipboard-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'Heart') {
            iconName = focused ? 'heart-outline' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          // Áp dụng animation cho dấu chấm
          if (focused) {
            Animated.timing(animation, {
              toValue: 1,
              duration: 300, 
              useNativeDriver: true,
            }).start();
          } else {
            Animated.timing(animation, {
              toValue: 0,
              duration: 300, // Thời gian hiệu ứng khi dấu chấm biến mất
              useNativeDriver: true,
            }).start();
          }

          return (
            <Animated.View
              style={{
                opacity: animation, // Điều chỉnh opacity của dấu chấm
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0], 
                    }),
                  },
                ],
              }}
            >
              {focused && <Text style={{ color: 'red' }}></Text>}
            </Animated.View>
          );
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#d1cfcf',
        tabBarStyle: {
          backgroundColor: '#007380',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 75,
          position: 'absolute',
          
          overflow: 'hidden',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Heart" component={Heart} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
