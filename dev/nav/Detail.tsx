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

type NavigationProps = NativeStackScreenProps<ParamList, 'Detail'>;
interface DetailProps extends NavigationProps {
  // navigation: NavigationProps['navigation'];
  // route: NavigationProps['route'];
}

function Detail(props: DetailProps) {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text>This is Detail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>GO back</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify({ route })}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text>Go to Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Detail;
