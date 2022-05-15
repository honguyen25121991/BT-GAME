import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import HomeTab from './Tab/HomeTab';
import {stackName} from '../config/navigationConstants';
import Screen from '../screen';
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
        component={Screen.LoginScreen}
      />
      <Stack.Screen
        key={4}
        name={stackName.registerScreen}
        component={Screen.RegisterScreen}
      />
      <Stack.Screen name={stackName.homeStack} component={HomeTab} />

      <Stack.Screen
        key={1}
        name={stackName.detailStack}
        component={Screen.DetailScreen}
      />
      <Stack.Screen
        key={2}
        name={stackName.userScreen}
        component={Screen.UserScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
