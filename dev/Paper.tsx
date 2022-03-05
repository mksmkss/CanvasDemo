import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import {
  Text, Button, Provider, DarkTheme, LightTheme,
} from 'react-native-paper';

import Container from './Container';

function Paper() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <Provider theme={isDark ? DarkTheme : LightTheme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Container style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Hello World</Text>
      </Container>
    </Provider>
  );
}

export default Paper;
