import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from '../Theme';
import styles from './styles';

interface ButtonProps {
  variant: 'primary' | 'default';
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties['style'];
}

const Button = ({
  label,
  variant,
  onPress,
  style,
}: ButtonProps): React.ReactElement => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.background2;
  const color =
    variant === 'primary' ? theme.colors.background : theme.colors.secondary;

  return (
    <RectButton
      style={[
        styles.container,
        style,
        {
          backgroundColor,
        },
      ]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;
