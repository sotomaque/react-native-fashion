import { LoadAssets } from '@components';
import RootNavigator from '@navigation';
import * as React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/components';
import './src/config/i18n';

const fonts = {
  'SFProText-Bold': require('./src/assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./src/assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./src/assets/fonts/SF-Pro-Text-Regular.otf'),
};

const App = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts }}>
        <RootNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
