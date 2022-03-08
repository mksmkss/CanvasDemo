import * as React from 'react';
import { View, Text } from 'react-native';

import Child from './Child';

function Parent(props) {
  return (
    <View>
      <Child LS="理" num={1} />
      <Child LS="文" num={3} />
    </View>
  );
}
