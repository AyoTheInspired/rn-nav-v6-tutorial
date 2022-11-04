import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {ROUTES} from '../constants';
import {Home, Notifications, Wallet} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.HOME_TAB} component={BottomTabNavigator} />
      <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet} />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
    </Drawer.Navigator>
  );
}
