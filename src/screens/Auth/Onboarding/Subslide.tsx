import { Button } from '@components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const Subslide = ({
  subtitle,
  description,
  last,
  onPress,
}: SubslideProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    marginTop: 25,
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    color: '#0C0D34',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default Subslide;
