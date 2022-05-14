import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const Header = ({LeftComponent, RightComponent}) => {
  //Nhận 2 props từ component cha truyền qua là Left và Right component
  return (
    <View style={styles.headerContainer}>
      <View>{LeftComponent}</View>
      <View>{RightComponent}</View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 50,
  },
});
