import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Wallet} from '../screens';
import {COLORS, ROUTES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.dark,
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
      <Tab.Screen
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        route="home"
        name={ROUTES.HOME_TAB}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        name={ROUTES.WALLET}
        component={Wallet}
      />
      <Tab.Screen
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarButton: props => <CustomTabBarButton {...props} />,
          tabBarLabel: 'Settings',
          title: 'Settings',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                marginRight: 10,
              }}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={30}
                color={COLORS.dark}
              />
            </TouchableOpacity>
          ),
        }}
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        route="settings"
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 88,
  },
});
