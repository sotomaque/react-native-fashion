import React from 'react';
import { View } from 'react-native';
import Graph from './Graph';

const Home = (): React.ReactElement => {
  return (
    <View style={{ height: '100%' }}>
      <Graph />
    </View>
  );
};

export default Home;
