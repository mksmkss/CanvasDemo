import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import CanvasDemo from './dev/CanvasDemo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [text, setText] = React.useState('Hello World');
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <CanvasDemo onOK={() => {}} />
    </View>
  );
}
