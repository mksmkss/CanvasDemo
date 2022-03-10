import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import SettingMain from './screens/SettingMain';
import SettingDetail from './screens/SettingDetail';

const SettingStack = createNativeStackNavigator<ParamList>();
function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting Main" component={SettingMain} />
      <SettingStack.Screen name="Setting Detail" component={SettingDetail} />
    </SettingStack.Navigator>
  );
}

export default SettingNavigator;
