import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Button, ButtonProps as RNButtonProps } from 'react-native-elements';
import { useValue } from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

interface ButtonProps extends RNButtonProps {
  large?: boolean;
}

const slides = [
  { label: 'Relaxed', color: '#BFEAF5' },
  { label: 'Playful', color: '#BEECC4' },
  { label: 'Excentric', color: '#FFE4D9' },
  { label: 'Funky', color: '#FFDDDD' },
];

const Onboarding = ({ large }: ButtonProps): React.ReactElement => {
  const x = useValue(0);
  console.log('large', large);
  const navigation = useNavigation();
  // const onScroll = onScrollEvent({ x });
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: slies.map((_, i) => i * width )
  //   outputRange: slies.map(slide => slide.color)
  // });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor: '#BFEAF5' }]}>
        <Animated.ScrollView
          decelerationRate='fast'
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          bounces={false}
          scrollEventThrottle={1}
        >
          {slides.map(({ label }, index) => (
            <Slide
              key={`${label}-${index}`}
              {...{ label }}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#BFEAF5',
          }}
        />
        <View style={styles.footerContent}>
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
            title='Navigate'
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

export default Onboarding;
