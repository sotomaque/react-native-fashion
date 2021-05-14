import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { AuthenticationStackParams } from 'src/navigation/types';
import Dot from './Dot';
import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Simple',
    color: '#BFEAF5',
    subtitle: 'Flatten the learning curve',
    description:
      'Trading platforms each offer unique user experiences. Onboarding and getting comforatable with each is unnecessary friction we aim to reduce.',
  },
  {
    title: 'Efficient',
    color: '#BEECC4',
    subtitle: 'Master view',
    description:
      'See how all your accounts across all the exchanges you use are preforming.',
  },
  {
    title: 'Smart',
    color: '#FFE4D9',
    subtitle: 'See an opportunity first',
    description:
      'Find opportunities on different exchanges and act quickly, without having to toggle tabs.',
  },
  {
    title: 'Data Driven',
    color: '#FFDDDD',
    subtitle: 'Trade smart not hard',
    description:
      'Analyze portfolio performance. Figure out where youre doing the right thing and where you are not.',
  },
];

type OnboardingProps = {
  navigation: StackNavigationProp<AuthenticationStackParams, 'Onboarding'>;
};

const Onboarding = ({ navigation }: OnboardingProps): React.ReactElement => {
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
  const currentIndex = useDerivedValue(() => x.value / width);

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
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index }} />
            ))}
          </View>
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
                onPress={() => {
                  if (index === slides.length - 1) {
                    navigation.replace('Home');
                  } else if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
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
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
