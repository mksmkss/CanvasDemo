import * as React from 'react';
import { View, Text } from 'react-native';

import Child from './Child';

function Parent(props) {
  return (
    <View>
      <Child name="test1" />
      <Child name="" />
      <Child />
    </View>
  );
}
