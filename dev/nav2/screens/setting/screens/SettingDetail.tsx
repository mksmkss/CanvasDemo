import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface SettingDetailProps {

}

function SettingDetail() {
//   const { } = props;
  return (
    <View style={style.container}>
      <Text>Setting Detail</Text>
    </View>
  );
}

export default SettingDetail;
