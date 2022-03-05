import * as React from 'react';
import { View, Image, Animated } from 'react-native';

import { Button, Text } from 'react-native-paper';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Canvas, CanvasRef, DrawingTool } from '@benjeau/react-native-draw';
import ColorPicker from 'react-native-wheel-color-picker';

const CanvasDemo = gestureHandlerRootHOC(() => {
  const [isRed, setIsRed] = React.useState(false);
  const [isHighLighter, setIsHighLighter] = React.useState(false);
  const [tool, setTool] = React.useState(DrawingTool.Brush);
  const [color, setColor] = React.useState('#FFFFFF');
  const ref = React.useRef<CanvasRef>();

  const handleToggleEraser = () => {
    setTool((prev) => (prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush));
  };

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray',
    }}
    >
      <Canvas
        ref={ref}
        color={color}
        thickness={isHighLighter ? 10 : 5}
        opacity={isHighLighter ? 0.5 : 1}
        height={200}
        width={800}
        tool={tool}
        onPathsChange={() => console.log('onPathsChange')}
      />
      <Button onPress={() => { console.log(ref.current?.getPaths()); }}>Get Paths</Button>
      <Button onPress={handleToggleEraser}>Toggle Eraser</Button>
      <Button onPress={() => setIsHighLighter(!isHighLighter)}>Toggle Highlighter</Button>
      <Text>{color}</Text>
      <View style={{ height: 100, width: 300 }}>
        <ColorPicker
          // ref={(r) => { this.picker = r; }}
          color={color}
          // swatchesOnly={this.state.swatchesOnly}
          onColorChange={(_color) => setColor(_color)}
          // onColorChangeComplete={this.onColorChangeComplete}
          thumbSize={40}
          sliderSize={30}
          // noSnap
          row={false}
          palette={['#000000', '#AAAAAA', '#FFFFFF', '#ed1c24', '#ff6e00', '#ffde17', '#008e42', '#00aeef', '#1633e6', '#d11cd5', '#c65757']}
          // swatchesLast={this.state.swatchesLast}
          // swatches={this.state.swatchesEnabled}
          // discrete
        />
      </View>
    </View>
  );
});

export default CanvasDemo;
