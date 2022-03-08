import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface SettingMainProps {

}

function SettingMain(props: SettingMainProps) {
  const { } = props;
  return (
    <View>
      <Text>Settting Main</Text>
    </View>
  );
}

export default SettingMain;
