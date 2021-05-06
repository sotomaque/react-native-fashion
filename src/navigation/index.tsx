import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens';
import React from 'react';
import AuthenticationNavigator from './AuthStack';

const Stack = createStackNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Auth' component={AuthenticationNavigator} />
      <Stack.Screen name='Home' component={HomeNavigator} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeNavigator(): React.ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Home2' component={Home} />
      <Tab.Screen name='Home3' component={Home} />
      <Tab.Screen name='Home4' component={Home} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
