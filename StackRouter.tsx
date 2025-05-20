import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
      />
      <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                            name="B2CLogin"
                            component={B2CLogin}
                        />
    </Stack.Navigator>
  );
}