import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class ProfileScreens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreens</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
