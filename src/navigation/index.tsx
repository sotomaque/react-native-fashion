/* eslint-disable react/display-name */
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
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
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name='ios-home-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Markets'
        component={Home}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Entypo name='line-graph' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='News'
        component={Home}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name='newspaper-o' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Home}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name='person-outline' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
