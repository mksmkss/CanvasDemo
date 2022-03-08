import * as React from 'react';
import { View, Text } from 'react-native';

import Sumio from '../../TypescriptDemo';

function SumioParent(props) {
  return (
    <View>
      <Sumio place="University of Tokyo" name="us" />
      {/* <Sumio place="kaijo" name="you"/> */}
    </View>
  );
}
