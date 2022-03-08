import * as React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ParamList from './ParamList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type NavigationProps = NativeStackScreenProps<ParamList, 'Hello World'>;
interface HelloWorldProps {
  navigation: NavigationProps['navigation'];
  // route: NavigationProps['route'];
}

function HelloWorld(props: HelloWorldProps) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Text>これが見られたら更新できてる</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HelloWorld;
