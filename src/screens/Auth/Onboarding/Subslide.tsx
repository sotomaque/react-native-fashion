import { Button, Text } from '@components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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
      <Text variant='title2' style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant='body' style={styles.description}>
        {description}
      </Text>
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
    marginBottom: 12,
    textAlign: 'center',
  },
  description: { textAlign: 'center', marginBottom: 40 },
});

export default Subslide;
