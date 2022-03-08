import * as React from 'react';
import { View, Image, Animated } from 'react-native';

import { Button, Text } from 'react-native-paper';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Canvas, CanvasRef, DrawingTool } from '@benjeau/react-native-draw';
import ColorPicker from 'react-native-wheel-color-picker';

const testPath = {
  color: '#00ffff',
  combine: false,
  data: [
    [[0, 0], [10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90], [100, 100]],
    [[200, 0], [210, 10], [220, 20], [230, 30], [240, 40], [250, 50], [260, 60], [270, 70], [280, 80], [290, 90], [300, 100]],
  ],
  path: [
    'M0,0c0,0 100,100 100,100',
    'M200,0c0,0 100,100 100,100',
  ],
  opacity: 1,
  thickness: 5,
};

const CanvasDemo = gestureHandlerRootHOC(() => {
  const [isHighLighter, setIsHighLighter] = React.useState(false);
  const [tool, setTool] = React.useState(DrawingTool.Brush);
  const [color, setColor] = React.useState('#FF0000');
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
        // initialPaths={[testPath]}
        // onPathsChange={() => console.log()}
        // combineWithLatestPath
        simplifyOptions={{
          amount: 1,
          simplifyCurrentPath: true,
        }}
      />
      <Button onPress={() => { console.log(ref.current?.getPaths()); }}>Get Paths</Button>
      <Button onPress={handleToggleEraser}>Toggle Eraser</Button>
      <Button onPress={() => setIsHighLighter(!isHighLighter)}>Toggle Highlighter</Button>
      <Button onPress={() => console.log(ref.current?.getSvg())}>Get SVG</Button>
      <Button onPress={() => console.log(ref.current?.getPaths())}>Get Path</Button>
      <Button onPress={() => ref.current?.addPath(testPath)}>Add Path</Button>
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
