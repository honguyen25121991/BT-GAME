import {Text, StyleSheet, View, StatusBar} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../themes/styles';

const BackgroundView = ({children, edge}) => {
  return (
    <SafeAreaView style={styles.container} {...this.props}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};
export default BackgroundView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBack,
    flex: 1,
  },
});
