import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
}

const Subslide = ({
  subtitle,
  description,
  last,
}: SubslideProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
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
  },
});

export default Subslide;
