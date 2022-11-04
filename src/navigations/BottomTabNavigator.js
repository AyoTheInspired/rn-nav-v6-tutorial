import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Settings, Wallet} from '../screens';
import {COLORS, ROUTES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}
