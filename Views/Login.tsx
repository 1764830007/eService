import { TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  B2CLogin: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

function Login(): React.JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [webViewVisible, setWebViewVisible] = useState(false);
  const b2cLoginUrl = 'https://dcpqa.semdcp.com/Login/GetB2CLogin?loginType=pwdLogin&username=test1&isFromMobile=true&isDarkMode=false';

  return (
    <View style={styles.container}>
      {/* WebView Modal */}
      <Modal
        visible={webViewVisible}
        onRequestClose={() => setWebViewVisible(false)}
        animationType="slide"
      >
        <WebView
          source={{ uri: b2cLoginUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => {
            // You can add logic here to handle navigation changes if needed
          }}
        />
        <Button
          onPress={() => setWebViewVisible(false)}
          style={styles.closeButton}
          mode="contained"
        >
          Close
        </Button>
      </Modal>

      {/* 品牌文本 */}
      <Text style={styles.brandText}>A Caterpillar Brand</Text>

      <View style={styles.inputContainer}>
        {/* 手机号/邮箱输入框 */}
        <TextInput
          mode="outlined"
          label="手机号/邮箱"
          placeholder="请输入手机号或邮箱"
          right={<TextInput.Affix text="/100" />}
        />

        {/* 登录按钮 - 添加在输入框下方 */}
        <Button
          onPress={() => setWebViewVisible(true)}
          mode="contained"
          style={styles.loginButton}
          buttonColor="orange"
        >
          登录
        </Button>
      </View>

      <View style={styles.registerContainer}>
        <Text>You don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={styles.registerText}
        >
          去注册
        </Text>
      </View>

      <Text style={styles.glaxText}>Or</Text>
      <Text style={styles.glaxText}>RECOMMEND TO USE WECHAT TO LOGIN QUICKLY</Text>
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
    marginTop: 30,
    paddingVertical: 8,
    color: 'black'
  },
  wechatButton: {
    paddingVertical: 8,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  registerText: {
    fontWeight: '700',
    color: 'blue',
    marginLeft: 5,
  },
  closeButton: {
    margin: 10,
    backgroundColor: 'red',
  },
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
});

export default Login;