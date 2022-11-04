import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register} from '../screens';
import {COLORS, ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.LOGIN}
        component={Login}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        options={({route}) => ({
          title: route.params.userId,
        })}
        component={ForgotPassword}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.HOME}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
