import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <View>
      <AppStack />
      <StatusBar style="light" />
    </View>
  );
}
