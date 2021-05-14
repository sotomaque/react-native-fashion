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
      <Text variant='title2'>{subtitle}</Text>
      <Text variant='body' style={{ textAlign: 'center', marginBottom: 40 }}>
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
});

export default Subslide;
