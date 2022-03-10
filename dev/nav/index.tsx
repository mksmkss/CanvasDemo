import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import HelloWorld from './HelloWorld';
import Detail from './Detail';
import SettingNavigator from './setting';

const RootStack = createNativeStackNavigator<ParamList>();
function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Hello World" component={HelloWorld} options={{ headerShown: false }} />
        <RootStack.Screen name="Detail" component={Detail} />
        <RootStack.Screen name="Setting" component={SettingNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// NavigationContainer は react-navigatiorを使う上で、一番外側で囲むもの

// RootStack
//  |-- HelloWorld
//  |-- Detail
//  |-- SettingStack
//     |-- SettingMain
//     |-- SettingDetail

// BottomTab
//  |--HomeStack
//    |-- Home
//    |
//  |--SettingStack

// Stack
// <RootStack.Navigator>
//  <RootStack.Screen name="HelloWorld" component={HelloWorld} />
//  <RootStack.Screen name="Detail" component={Detail} />
// </RootStack.Navigator>

// BottomTabs
// <RootBottom.Navigator>
//  <RootBottom.Screen name="HelloWorld" component={HelloWorld} />
//  <RootBottom.Screen name="Detail" component={Detail} />
// </RootBottom.Navigator>

// Drawer

export default RootNavigator;
