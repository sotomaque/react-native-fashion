import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const Home = (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('Onboarding');
        }}
        title='Navigate'
        style={{ marginTop: 200, marginHorizontal: 40 }}
        accessibilityLabel='TODO:AL'
      />
    </View>
  );
};

export default Home;
