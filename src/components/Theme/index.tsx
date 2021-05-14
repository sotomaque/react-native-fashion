import {
  createBox,
  createText,
  ThemeProvider as ReStyleThemeProvider,
  useTheme as useReTheme,
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

export const aspectRatio = width / 375;

export const palette = {
  green: '#2CB9B0',
  white: 'white',
  orange: '#FE5E33',
  yellow: '#FFC641',
  pink: '#FF87A2',
  violet: '#442CB9',
  lightBlue: '#BFEAF5',
};

const theme = {
  colors: {
    primary: palette.green,
    primaryLight: '#E7F9F7',
    secondary: '#0C0D34',
    danger: '#FF0058',
    info: '#808080',
    edit: palette.lightBlue,
    text: 'rgba(12, 13, 52, 0.7)',
    textContrast: palette.white,
    background: palette.white,
    background2: '#F6F6F6',
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 65,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: 'background',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title3: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Medium',
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Semibold',
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): React.ReactElement => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): any => useReTheme<Theme>();
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => (): NamedStyles<T> => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

export default ThemeProvider;
