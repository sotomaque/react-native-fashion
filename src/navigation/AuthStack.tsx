import { createStackNavigator } from '@react-navigation/stack';
import { Home, Onboarding } from '@screens';
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
      <AuthenticationStack.Screen name='Home' component={Home} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
