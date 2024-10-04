import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import GooglePNG from '../../assets/Wrappergg.png';
import FacebookPNG from '../../assets/Shapeapple.png';
import ApplePNG from '../../assets/Shapefb.png';

const LoginScreen = (props ) => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");   // State lưu trữ username
  const [password, setPassword] = useState("");   // State lưu trữ password

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/image 20bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* <ScrollView style={styles.scrollView}> */}
          <Image
            source={require('../../assets/Login/AvatarLoginImg.png')}
            style={{ top: 20, left: 0, right: 0, bottom: 0, position: 'absolute', width: 389, height: 338 }}
          />
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{"Đăng nhập"}</Text>
              <Text style={styles.subtitle}>{"Vui lòng đăng nhập để tiếp tục"}</Text>

              {/* Input username */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}  // Cập nhật state username
                />
                <Icon name="user" size={20} color="#A3A3A3" />
              </View>

              {/* Input password */}
              <View style={styles.inputPasswordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  secureTextEntry={!isPasswordVisible}  // Ẩn/mở password
                  value={password}
                  onChangeText={(text) => setPassword(text)}  // Cập nhật state password
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon
                    name={isPasswordVisible ? "eye-slash" : "eye"}
                    size={20}
                    color="#A3A3A3"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>{"Quên mật khẩu?"}</Text>
              </TouchableOpacity>

              {/* Nút Đăng nhập */}
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>{"Đăng nhập"}</Text>
              </TouchableOpacity>

              {/* Dòng thông báo cho người dùng chưa có tài khoản */}
              <View style={styles.signupPrompt1}>
                <Text style={styles.signupText}>{"Chưa có tài khoản?"}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                  <Text style={styles.signupLink}>{" Đăng ký"}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signupPrompt2}>
                <Text style={styles.signupText}>{"Đăng nhập bằng"}</Text>
               
              </View>

              {/* Các biểu tượng đăng nhập bằng mạng xã hội */}
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.socialIcon}
                >
                  <Image source={GooglePNG} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.socialIcon}
                >
                  <Image source={ApplePNG} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.socialIcon}
                >
                  <Image source={FacebookPNG} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backgroundImage: {
    flex: 1,
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -45,
  },

  // scrollView: {
  //   flex: 1,
  //   backgroundColor: "transparent",
  //   paddingHorizontal: 2,
  //   paddingBottom: 20,
  // },
  contentContainer: {
    height: 483,
    marginTop: 390,
  },
  header: {
    flex: 1,
    backgroundColor: "#A3A3A3B0",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 12,
    paddingBottom: 34,
  },
  title: {
    color: "#EFEFEF",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 14,
    marginLeft: 0,
    textAlign: 'center',

  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 0,
    textAlign: 'center',


  },
  inputContainer: {
    width: 326,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 16,
    marginBottom: 18,
    marginHorizontal: 27,
  },
  inputText: {
    color: "#A3A3A3",
    fontSize: 14,
    fontWeight: "bold",
  },
  inputPasswordContainer: {
    marginBottom: 21,
    marginHorizontal: 28,
    width: 326,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    color: "#A3A3A3",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "right",
    marginRight: 36,
    marginBottom: 29,
  },
  loginButton: {
    backgroundColor: "#34C8E8",
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 100,
    marginBottom: 0,
    marginHorizontal: 36,
    alignItems: "center",

  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center',
  },
  signupPrompt1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
  },
  signupPrompt2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 13,
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  signupLink: {
    color: "#34C8E8",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  socialIcon: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default LoginScreen;
