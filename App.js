import 'react-native-gesture-handler'; // Import bắt buộc
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện vector icons
import Home from './src/screens/Home';
import Account from './src/screens/Account';
import Cart from './src/screens/Cart';
import Heart from './src/screens/Heart';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  const hanleClick = navigation => {
    navigation.navigate("Details");
  };



  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Tên biểu tượng cho tab Home
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline'; // Tên biểu tượng cho tab Details
            }
            else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline'; // Tên biểu tượng cho tab account
            } else if (route.name === 'Heart') {
              iconName = focused ? 'heart' : 'heart-outline'; // Tên biểu tượng cho tab Heart
            }


            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#b83b50',
          tabBarInactiveTintColor: '#d1cfcf',
          tabBarActiveTintColor: '#d1cfcf',
          // tabBarStyle: {
          //   backgroundColor: '#e0f7fa', // Màu nền của thanh điều hướng tab
          // },
          tabBarStyle: {
            backgroundColor: '#007380', // Màu nền thanh điều hướng tab
            borderTopLeftRadius: 30, // Cong góc trên bên trái
            borderTopRightRadius: 30, // Cong góc trên bên phải
            height: 60, // Chiều cao của thanh điều hướng tab
            overflow: 'hidden', // Đảm bảo các góc cong không bị cắt
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
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator> */}
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
    // <View>
    //   <Text>hello</Text>
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
