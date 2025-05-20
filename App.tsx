/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { TextInput } from 'react-native-paper';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './StackRouter';
export default function App() {
  return (
    <NavigationContainer>
      <StackRouter></StackRouter>
    </NavigationContainer>
  );
}
