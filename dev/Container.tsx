import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { withTheme } from 'react-native-paper';

// import { Theme } from '../../../interface';

interface ContainerProps extends ViewProps {
  // theme: Theme;
}

function Container(props: ContainerProps) {
  const { theme, style, ...viewProps } = props;
  const { colors } = theme;
  const combinedStyles = [{ backgroundColor: colors.background }, style];
  return (
    <View {...viewProps} style={combinedStyles} />
  );
}

export default withTheme(Container);
