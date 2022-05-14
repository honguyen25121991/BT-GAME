import {
  Text,
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../../themes/styles';

export default class TextInput extends Component {
  state = {
    secureTextEntry: this.props.secureTextEntry,
  };

  render() {
    const {
      title,
      placeholder,
      password,
      errorMessage,
      touched,
      emailIcon,
      passwordIcon,
    } = this.props;
    const {secureTextEntry} = this.state;

    const isShowError = !!errorMessage && touched;

    return (
      <View style={styles.wrapperTextInput}>
        <View>
          <RNTextInput
            {...this.props}
            placeholder={placeholder}
            style={[styles.textInput, isShowError && styles.errorBackground]}
            secureTextEntry={secureTextEntry}></RNTextInput>
          {emailIcon && (
            <View style={styles.iconInput}>
              <EntypoIcon
                name="mail"
                color="#343434"
                size={30}
                {...this.props}
              />
            </View>
          )}
          {passwordIcon && (
            <View style={styles.iconInput}>
              <MaterialIcons
                name="vpn-key"
                color="#343434"
                size={30}
                {...this.props}
              />
            </View>
          )}
          <Text style={styles.textInputTitle}>{title}</Text>

          {password && (
            <TouchableOpacity
              onPress={() => {
                this.setState({secureTextEntry: !this.state.secureTextEntry});
              }}>
              <EntypoIcon
                name="eye"
                color="#bbb"
                size={20}
                style={styles.rightIcon}
                {...this.props}
              />
            </TouchableOpacity>
          )}
          {isShowError && (
            <Text style={styles.errorMessage}> * {errorMessage}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorBackground: {
    borderColor: 'red',
    backgroundColor: '#f9c8c8',
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  wrapperTextInput: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: COLORS.lightPurple,
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingTop: 25,
    marginBottom: 5,
  },
  textInputTitle: {
    // color: '#bbb',
    position: 'absolute',
    top: 10,
    paddingHorizontal: 40,
  },
  iconInput: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
