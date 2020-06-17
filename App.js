import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
