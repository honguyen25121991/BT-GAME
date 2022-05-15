import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import {iconApp} from '../../assets';
import {TextInput} from '../../components/';
import {COLORS} from '../../themes/styles';
import {navigate} from '../../navigations/NavigationWithouProp';
import {stackName} from '../../config/navigationConstants';
import * as Yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Không được bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .min(4, 'Mật khẩu tối thiểu có 4 kí tự')
    .max(9, 'không được vượt quá 9 ki tu')
    .required('Không được bỏ trống'),
});
export default class Login extends Component {
  login = () => {
    console.log('suceesss');
    navigate(stackName.homeStack);
  };
  handleSubmit = async values => {
    if (values) {
      // Alert.alert('Suceess Full');
      this.login();
    }
    try {
      await axios({
        method: 'POST',
        url: 'http://svcy3.myclass.vn/api/Users/signin',
        data: values,
      });
    } catch (err) {
      if (err.message.includes('400')) {
        Alert.alert('Login Failed ');
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
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
          <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={this.handleSubmit}>
            {({
              values,
              errors,
              handleChange,
              touched,
              handleBlur,
              handleSubmit,
            }) => {
              return (
                <View style={styles.loginFrom}>
                  <TextInput
                    title="Email"
                    placeholder="email@gmail.com"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    errorMessage={errors.email}
                    onBlur={handleBlur('email')}
                    touched={touched.email}
                  />
                  <TextInput
                    title="PassWord"
                    placeholder="*******"
                    secureTextEntry
                    password
                    value={values.password}
                    onChangeText={handleChange('password')}
                    errorMessage={errors.password}
                    onBlur={handleBlur('password')}
                    touched={touched.password}
                  />

                  <TouchableOpacity
                    style={styles.bottomStyle}
                    onPress={handleSubmit}>
                    <Text>Login</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>

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
          <Text>
            Don't have an account {'  '}
            <Text
              style={styles.footerBottomText}
              onPress={() => navigate(stackName.registerScreen)}>
              Register !
            </Text>
          </Text>
        </View>
      </SafeAreaView>
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
