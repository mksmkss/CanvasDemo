import * as React from 'react';
import { View, Text } from 'react-native';

type ChildProps = {
  name: string;
}

function Child(props: ChildProps) {
  const { name } = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default Child;
