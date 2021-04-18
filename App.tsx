import { LoadAssets } from '@components';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';
import * as React from 'react';
import 'react-native-gesture-handler';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

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
