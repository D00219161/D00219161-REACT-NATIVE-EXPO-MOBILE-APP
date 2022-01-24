import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import ImageScreen from '../screens/ImageScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          textAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          title: 'Tips',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help" />,
          textAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Image"
        component={ImageScreen}
        options={{
          title: 'ImagePicker',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-camera" />,
          textAlign: 'center',
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
      case 'Home':
        return 'Photography Brought To Life';
    case 'Tips':
      return 'Photography Brought To Life';
      case 'Camera':
        return 'Photography Brought To Life';
  }
}
