import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { BORDER_RADIUS } from './Onboarding';
interface SlideProps {
  label: string;
  right?: boolean;
  picture: number;
}
const { height, width } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right, picture }: SlideProps): React.ReactElement => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.image} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    top: BORDER_RADIUS,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});
export default Slide;
