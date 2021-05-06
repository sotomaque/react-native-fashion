import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ButtonProps as RNButtonProps } from 'react-native-elements';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

interface ButtonProps extends RNButtonProps {
  large?: boolean;
}

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfit? Dont worry! Find the best outfit here!',
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
  },
];

const Onboarding = (): React.ReactElement => {
  const x = useSharedValue(0);
  const scroll = useRef<Animated.ScrollView>(null);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color)
    )
  );
  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map(({ title }, index) => (
            <Slide
              key={`${title}-${index}`}
              label={title}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        <View style={styles.footerContent}>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                {...{ subtitle, description }}
                last={index === slides.length - 1}
              />
            ))}
          </Animated.View>
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
