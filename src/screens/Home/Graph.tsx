import * as shape from 'd3-shape';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  Extrapolate,
  interpolate,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { getPointAtLength, parsePath } from './components/AnimatedHelpers';
import Cursor from './Cursor';
import Label from './Label';

const { width: deviceWidth } = Dimensions.get('window');
const width = deviceWidth - 10;
const height = width;
const data: [number, number][] = [
  { x: new Date(2021, 4, 6), y: 4371 },
  { x: new Date(2021, 4, 7), y: 6198 },
  { x: new Date(2021, 4, 8), y: 5310 },
  { x: new Date(2021, 4, 9), y: 7188 },
  { x: new Date(2021, 4, 10), y: 8677 },
  { x: new Date(2021, 4, 11), y: 5012 },
].map(p => [p.x.getTime(), p.y]);

const domain = {
  x: [Math.min(...data.map(([x]) => x)), Math.max(...data.map(([x]) => x))],
  y: [Math.min(...data.map(([, y]) => y)), Math.max(...data.map(([, y]) => y))],
};

const range = {
  x: [0, width],
  y: [height, 0],
};

const scale = (v: number, d: number[], r: number[]) => {
  'worklet';
  return interpolate(v, d, r, Extrapolate.CLAMP);
};

const scaleInvert = (y: number, d: number[], r: number[]) => {
  'worklet';
  return interpolate(y, r, d, Extrapolate.CLAMP);
};

const d = shape
  .line()
  .x(([x]) => scale(x, domain.x, range.x))
  .y(([, y]) => scale(y, domain.y, range.y))
  .curve(shape.curveBasis)(data) as string;
const path = parsePath(d);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

const Graph = (): React.ReactElement => {
  const length = useSharedValue(0);
  const point = useDerivedValue(() => {
    const p = getPointAtLength(path, length.value);
    return {
      coord: {
        x: p.x,
        y: p.y,
      },
      data: {
        x: scaleInvert(p.x, domain.x, range.x),
        y: scaleInvert(p.y, domain.y, range.y),
      },
    };
  });
  return (
    <View style={styles.container}>
      <Label {...{ data, point }} />
      <View>
        <Svg {...{ width, height }}>
          <Defs>
            <LinearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gradient'>
              <Stop stopColor='#CDE3F8' offset='0%' />
              <Stop stopColor='#eef6fd' offset='80%' />
              <Stop stopColor='#FEFFFF' offset='100%' />
            </LinearGradient>
          </Defs>
          <Path
            fill='transparent'
            stroke='#367be2'
            strokeWidth={5}
            {...{ d }}
          />
          <Path
            d={`${d}  L ${width} ${height} L 0 ${height}`}
            fill='url(#gradient)'
          />
        </Svg>
        <Cursor {...{ path, length, point }} />
      </View>
    </View>
  );
};

export default Graph;
