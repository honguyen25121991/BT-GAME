import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native';
import {goBack, navigate} from '../../navigations/NavigationWithouProp';
import {tabName} from '../../config/navigationConstants';

const ProfileScreens = () => {
  const gomap = () => {
    navigate(tabName.mappingTab);
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screens</Text>
      <Button title="Go map" onPress={gomap} />
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
