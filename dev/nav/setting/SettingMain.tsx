import * as React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import RootParamList from '../ParamList';
import SettingParamList from './ParamList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type NavigationProps = CompositeScreenProps<
  NativeStackScreenProps<SettingParamList, 'Setting Main'>,
  NativeStackScreenProps<RootParamList>
>
interface SettingMainProps extends NavigationProps {

}

function SettingMain(props: SettingMainProps) {
  const { navigation, route } = props;
  return (
    <View>
      <Text>Settting Main</Text>
      <Text>{JSON.stringify({ route })}</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SettingMain;
