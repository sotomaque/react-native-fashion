import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AuthenticationNavigator from './AuthStack';

const Tab = createBottomTabNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={AuthenticationNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name='Home1' component={AuthenticationNavigator} />
      <Tab.Screen name='Home2' component={AuthenticationNavigator} />
      <Tab.Screen name='Home3' component={AuthenticationNavigator} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
