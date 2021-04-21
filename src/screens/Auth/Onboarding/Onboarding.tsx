import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Button, ButtonProps as RNButtonProps } from 'react-native-elements';
import { useValue } from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';

const { width } = Dimensions.get('window');

interface ButtonProps extends RNButtonProps {
  large?: boolean;
}

const Onboarding = ({ large }: ButtonProps): React.ReactElement => {
  const x = useValue(0);
  console.log('large', large);
  const navigation = useNavigation();
  // const onScroll = onScrollEvent({ x });
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ['#BFEAF5', '#BEECC4', 'FFE4D9', 'FFDDDD'],
  // });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor: 'cyan' }]}>
        <Animated.ScrollView
          decelerationRate='fast'
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          bounces={false}
          scrollEventThrottle={1}
        >
          <Slide label='Relaxed' />
          <Slide label='Playful' right />
          <Slide label='Excentric' />
          <Slide label='Funky' right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'cyan' }}
        />
        <View
          style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}
        >
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
            title='Navigate'
            color='#841584'
            style={{ marginTop: 200, marginHorizontal: 40 }}
            accessibilityLabel='TODO:AL'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default Onboarding;
