import { LoadAssets } from '@components';
import { AuthenticationNavigator } from '@navigation';
import * as React from 'react';
import 'react-native-gesture-handler';

const fonts = {
  'SFProText-Bold': require('./src/assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./src/assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./src/assets/fonts/SF-Pro-Text-Regular.otf'),
};

const App = (): React.ReactElement => {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
};

export default App;
