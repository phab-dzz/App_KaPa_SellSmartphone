import react from 'react';
import 'react-native-gesture-handler'; // Import bắt buộc
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện vector icons
import Home from "../screens/Home"
import Account from "../screens/Account";
import Cart from '../screens/Cart';
import Heart from '../screens/Heart';
const Tab = createBottomTabNavigator();
export default function MyTabs() {
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


                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarActiveTintColor: '#b83b50',
                // tabBarInactiveTintColor: '#d1cfcf',
                // tabBarActiveTintColor: '#d1cfcf',
                barStyle: {
                    backgroundColor: 'red', // Thay màu nền ở đây
                },
                tabBarLabel: '•', // Đổi thành dấu chấm cho tất cả các tab
                tabBarActiveTintColor: 'red', // Màu khi tab được click
                tabBarInactiveTintColor: '#d1cfcf',
                tabBarStyle: {

                    backgroundColor: '#007380', // Màu nền thanh điều hướng tab
                    borderTopLeftRadius: 30, // Cong góc trên bên trái
                    borderTopRightRadius: 30, // Cong góc trên bên phải
                    height: 60, // Chiều cao của thanh điều hướng tab
                    //độ mờ của tabbar
                    overflow: 'hidden', // Đảm bảo các góc cong không bị cắt
                },
            })}
            style={{ backgroundColor: 'red' }}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Heart" component={Heart} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}