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
interface DetailProps {
  navigation: NavigationProps['navigation'];
  // route: NavigationProps['route'];
}
interface DetailProps {
}

function Detail(props: DetailProps) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>This is Detail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>GO back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Detail;
