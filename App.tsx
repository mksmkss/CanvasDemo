import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import CanvasDemo from './dev/CanvasDemo';
import Paper from './dev/Paper';
import RootNavigator from './dev/nav2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  // const [text, setText] = React.useState('Hello World');
  const [screen, setScreen] = React.useState(0);

  return (
    <RootNavigator />
  );

  // return (
  //   <View style={styles.container}>
  //     {screen === 0 ? <CanvasDemo /> : <Paper />}
  //     <Button onPress={() => setScreen((prev) => (prev === 0 ? 1 : 0))}>Change Screen</Button>
  //   </View>
  // );
}
