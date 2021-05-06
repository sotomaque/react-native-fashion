import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Graph from './Graph';

const Home = (): React.ReactElement => {
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
      <ScrollView>
        <View>
          <Graph />
        </View>
        <View>
          <Card label='Coinbase' backgroundColor='#2850E7' />
          <Card label='Robinhood' backgroundColor='#51AE6F' />
          <Card label='Gemini' backgroundColor='#1437bb' />
          <Card label='Binance' backgroundColor='#F3BA2F' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface CardProps {
  label: string;
  backgroundColor: string;
}

const Card = ({ label, backgroundColor }: CardProps): React.ReactElement => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 22,
        height: 200,
        backgroundColor,
      }}
    >
      {/* Label */}
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
          backgroundColor: 'rgba(6, 14, 23, 0.2)',
          padding: 10,
          borderRadius: 20,
          alignSelf: 'flex-start',
        }}
      >
        <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>
          {label}
        </Text>
      </View>
      {/* Graph */}
    </View>
  );
};

export default Home;
