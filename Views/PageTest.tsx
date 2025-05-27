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

function Text(): React.JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState(''); // State variable for TextInput value

    const handleButtonPress = () => {
      // Show the username value when button is pressed
      Alert.alert('Username', `You entered: ${username}`);
      console.log('Username:', username);
    };
  return (
    <View style={styles.container}>


      <View style={styles.inputContainer}>
        {/* 手机号/邮箱输入框 */}
        <TextInput
          mode="outlined"
          label="用户名/电话号码"
          value={username}
          onChangeText={(text) => setUsername(text)}
          right={<TextInput.Affix text="/100" />}
        />
        <Text>忘记用户名？</Text>
        {/* 登录按钮 - 添加在输入框下方 */}
        <Button
          mode="contained"
          style={styles.loginButton}
          buttonColor="orange"
          onPress={handleButtonPress}
        >
          继续
        </Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 250
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

      paddingVertical: 8, // 垂直内边距
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

export default Text;
