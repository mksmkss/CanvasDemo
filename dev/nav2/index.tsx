import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import Home from './screens/Home';
import Search from './screens/Search';
import SettingNavigator from './screens/setting';

// RootNavigator
// |-HomeNavigator o
// | |--HomeMain
// | |--HomeDetail
// | |--HomeAccountNavigator
// |   |--HomeAccountEdit
// |   |--HomeAccountPreview
// |-SearchNavigator o
// | |--SearchMain
// | |--SearchDetail
// |-SettingNavigator o
//   |--SettingMainNavigator o
//     |--SettingProfile
//     |--SettingLanguage
//   |--SettingDetail o

// HomeMain --> SettingProfile
/* HomeMain.tsx
navigation.navigate('SettingNavigator')
*/

// HomeMain --> SettingDetail
/* HomeMain.tsx
navigation.navigate('SettingNavigator', { screen: 'SettingDetail' })
*/

// HomeMain --> SettingLanguage
/* HomeMain.tsx
navigation.navigate('SettingNavigator, { screen: { route: 'SettingMainNavigator', screen: 'SettingLanguage' }, })
*/

/* 分家
<RootNavigator /> // 本家

<DevNavigator /> // 分家

App.tsx
{isDevMode ? <RootNavigator /> ? <DevNavigator />}

*/

// RootNavigator
// |-Home
// |-Search

const RootStack = createNativeStackNavigator<ParamList>();
function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Search" component={Search} />
        <RootStack.Screen name="Setting" component={SettingNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// nav2/setting/index.tsx
/*
const SettingStack = createNativeStackNavigator()
const SettingNav = () => {
  return (
    <SettinStack.Navigator>
      <SettingStack.Screen name="Setting Main" component={SettingMain} />
      <SettingStack.Screen name="Setting Detail" component={SettingDetail} />
    </SettinStack.Navigator>
  )
}
*/

export default RootNavigator;
