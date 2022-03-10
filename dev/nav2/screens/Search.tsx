import * as React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ParamList from '../ParamList';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type NavigationProps = NativeStackScreenProps<ParamList, 'Search'>
type SearchProps = {
  navigation: NavigationProps['navigation']
}

function Search(props: SearchProps) {
  const { navigation } = props;
  return (
    <View style={style.container}>
      <Text>Search</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
}

export default Search;
