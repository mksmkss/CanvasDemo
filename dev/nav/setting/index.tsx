import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import SettingMain from './SettingMain';
import SettingDetail from './SettingDetail';

const SettingStack = createNativeStackNavigator<ParamList>();
function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting Main" component={SettingMain} />
      <SettingStack.Screen name="SettingDetail" component={SettingDetail} />
    </SettingStack.Navigator>
  );
}

export default SettingNavigator;
