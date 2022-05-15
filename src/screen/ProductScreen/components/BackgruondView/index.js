import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class BackgroundViewProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <View style={styles.ContentBorderRight}></View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceef2',
  },
  contentHeader: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: '#000',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 80,
  },
  ContentBorderRight: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 25,
    bottom: -5,
    right: -10,
  },
});
