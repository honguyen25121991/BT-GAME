import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {COLORS} from '../../themes/styles';
import IconButton from 'react-native-vector-icons/Entypo';
import {BackgroundView, Header, Text} from '../../components';

export default class UserScreen extends Component {
  onPressBackHome = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <BackgroundView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.onPressBackHome()}>
          <IconButton name="back" size={20} color={COLORS.opacityWhite} />
        </TouchableOpacity>
        <Text>User</Text>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.7,
  },
});
