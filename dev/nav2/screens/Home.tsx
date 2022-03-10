import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ParamList from '../ParamList';

type NavigationProps = NativeStackScreenProps<ParamList, 'Home'>
type HomeProps = {
  navigation: NavigationProps['navigation']; // NavigationProps.navigationって書きたいけどtypeではそれが許されない
}

function Home(props: HomeProps) {
  const { navigation } = props;
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}

export default Home;
