import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoDetailScreen />
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
