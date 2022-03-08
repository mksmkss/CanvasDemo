import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface SettingDetailProps {
}

function SettingDetail(props: SettingDetailProps) {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Setting Detail</Text>
    </View>
  );
}

export default SettingDetail;
