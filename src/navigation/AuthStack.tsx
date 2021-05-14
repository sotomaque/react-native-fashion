import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome } from '@screens';
import React from 'react';
import { AuthenticationStackParams } from './types';

const AuthenticationStack = createStackNavigator<AuthenticationStackParams>();

const AuthenticationNavigator = (): React.ReactElement => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
