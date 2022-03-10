import * as React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native'; // Compsite means "複合"
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import RootParamList from '../../../ParamList';
import SettingParamList from '../ParamList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type NavigationProps = CompositeScreenProps<
  NativeStackScreenProps<SettingParamList, 'Setting Main'>,
  NativeStackScreenProps<RootParamList>
>
type SettingMainProps = {
  navigation: NavigationProps['navigation']
}

function SettingMain(props: SettingMainProps) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Button title="Go to SettingDetail" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SettingMain;
