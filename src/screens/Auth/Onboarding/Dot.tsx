import React from 'react';
import Animated from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.SharedValue<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  return (
    <Animated.View
      style={{
        backgroundColor: '#2CB9B0',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
      }}
    />
  );
};

export default Dot;
