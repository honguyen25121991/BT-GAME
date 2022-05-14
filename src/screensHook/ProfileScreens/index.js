import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {goBack, navigate} from '../../navigations/NavigationWithouProp';
import {stackName, tabName} from '../../config/navigationConstants';

const ProfileScreens = () => {
  // MyBackButton = () => {
  //   const navigation = useNavigation();
  // };
  return (
    <View style={styles.container}>
      <Text>Profile Screens</Text>
      <Button
        title="Back"
        onPress={() => {
          navigate(tabName.downLoadTab);
        }}
      />
      <Button
        title="Close"
        onPress={() => {
          goBack();
        }}
      />
    </View>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
