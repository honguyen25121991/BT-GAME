import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import {iconApp} from '../../assets';
import {TextInput} from '../../components/';
import {COLORS} from '../../themes/styles';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Shoes Store </Text>
        </View>
        <View style={styles.loginFrom}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image source={iconApp} style={styles.avatar} />
          </View>
          <TextInput title="Email" placeholder="email@gmail.com" emailIcon />
          <TextInput
            title="PassWord"
            placeholder="*******"
            secureTextEntry
            password
            passwordIcon
          />
          <TouchableOpacity
            style={styles.bottomStyle}
            onPress={() => {
              console.log('123');
            }}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log('accessToken', data.accessToken.toString());
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
            <Text style={styles.textBotton}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>Don't have an account</Text>
          <Text
            style={styles.footerBottomText}
            onPress={() => this.props.navigation.navigate('RegisterScreen')}>
            Register !
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  headerText: {
    color: COLORS.lightBlue,
    fontSize: 24,
    fontWeight: '600',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  loginFrom: {
    flex: 4,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  loginText: {
    color: COLORS.lightBack,
    fontSize: 18,
    fontWeight: '400',
  },
  bottomStyle: {
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBotton: {color: '#6330C2', alignSelf: 'center'},
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#6330C2',
  },
  footerBottomText: {
    color: '#6330C2',
    fontWeight: '600',
  },
});
