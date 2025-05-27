import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './Views/Login'
import Register from './Views/Register'
import B2CLogin from './Views/B2CLogin'
import LoginAfter from './Views/LoginAfter'
import Setting from './Views/Setting'
import DeviceManage from './Views/DeviceManage'
import Map from './Views/Map'
const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="B2CLogin"
        component={B2CLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginAfter"
        component={LoginAfter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DeviceManage"
        component={DeviceManage}
        options={{
            title: '设备管理', // 修改标题文本

          }}
      />

      <Stack.Screen
              name="Map"
              component={Map}
              options={{
                  title: '地图', // 修改标题文本

                }}
            />
    </Stack.Navigator>
  );
}