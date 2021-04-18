import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';
import React from 'react';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = (): React.ReactElement => {
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

export default AuthenticationNavigator;
