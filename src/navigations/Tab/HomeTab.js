import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconButton from 'react-native-vector-icons/Entypo';
import {tabName} from '../../config/navigationConstants';
import {COLORS} from '../../themes/styles';
import Screen from '../../screen';

const BottomTab = createBottomTabNavigator();
const tabBarIcon = ({route: {name}, size, focused}) => {
  const icons = {
    HomeTab: 'home',
    StreamTab: 'game-controller',
    ProfileTab: 'user',
    MappingTab: 'map',
  };
  const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
  return (
    <View style={[styles.tabBarIcon, {backgroundColor}]}>
      <IconButton name={icons[name]} size={size} color={COLORS.white} />
    </View>
  );
};
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.lightBack,
    borderTopColor: COLORS.lightBack,
  },
  tabBarIcon: params => tabBarIcon({...params, route}),
});
const HomeTab = () => {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen name={tabName.homeTab} component={Screen.HomeScreen} />
      <BottomTab.Screen
        name={tabName.streamTab}
        component={Screen.ProductScreen}
      />
      <BottomTab.Screen
        name={tabName.profileTab}
        component={Screen.ProfileScreen}
      />
      <BottomTab.Screen
        name={tabName.mappingTab}
        component={Screen.MappingScreen}
      />
    </BottomTab.Navigator>
  );
};
export default HomeTab;
const styles = StyleSheet.create({
  tabBarIcon: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
