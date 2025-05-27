import { TextInput, Button,Text } from 'react-native-paper'; // 导入 Button 组件
import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import  { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

//type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

function PageTest(): React.JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState(''); // State variable for TextInput value

    const handleButtonPress = () => {
      // Show the username value when button is pressed
      Alert.alert('Username', `You entered: ${username}`);
      console.log('Username:', username);
    };
  return (
    <View style={styles.container}>


     <Button
             mode="contained"
             style={styles.wechatButton}
             buttonColor="#07C160"
             onPress={() => console.log('登录按钮被点击')}
           >
             WECHAT LOGIN
           </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {


  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  glaxText: {
    color: 'black',
    textAlign: 'center',
    padding: 20,
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginButton: {
    marginTop: 30, // 按钮与输入框的间距
    paddingVertical: 8, // 垂直内边距
    color: 'black'
  },
  wechatButton: {


    },
  // 其他保留的样式...
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  registerText: {
    fontWeight: '700',
    color: 'blue',
    marginLeft: 5,
  },
});

export default PageTest;
