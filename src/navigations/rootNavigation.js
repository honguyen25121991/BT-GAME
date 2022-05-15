import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import HomeTab from './Tab/HomeTab';
import {stackName} from '../config/navigationConstants';
import Screen from '../screens/';
import ScreenHook from '../screensHook';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        key={3}
        name={stackName.loginScreen}
        component={ScreenHook.LoginScreen}
      />
      <Stack.Screen
        key={4}
        name={stackName.registerScreen}
        component={ScreenHook.RegisterScreen}
      />

      <Stack.Screen name={stackName.homeStack} component={HomeTab} />

      <Stack.Screen
        key={1}
        name={stackName.detailStack}
        component={ScreenHook.DetailScreenHook}
      />
      <Stack.Screen
        key={2}
        name={stackName.userScreen}
        component={ScreenHook.UserScreenHook}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
