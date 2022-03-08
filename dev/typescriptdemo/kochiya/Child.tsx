import * as React from 'react';
import { View, Text } from 'react-native';

type ChildProps = {
    LS: string;
    num: number;
};

function Child(props: ChildProps) {
  const { LS, num } = props;
  return (
    <View>
      <Text>
        {LS}
        科
        {num}
        類に進学したい
      </Text>
    </View>
  );
}

export default Child;
