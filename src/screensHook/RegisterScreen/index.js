import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {iconApp} from '../../assets';
import TextInput from '../../components/TextInput';
import {COLORS} from '../../themes/styles';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Không được bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .min(4, 'Mật khẩu tối thiểu có 4 kí tự')
    .max(9, 'không được vượt quá 9 ki tu')
    .required('Không được bỏ trống'),
  name: Yup.string()
    .required('Không được bỏ trống')
    .min(5, 'Tến tối thiểu có 5 kí tự')
    .max(9, 'Tên không được vượt quá 12 ki tu'),
  phone: Yup.string().required('Không được bỏ trống'),
});

export default class Register extends Component {
  handleSubmit = async values => {
    if (values) {
      Alert.alert('Suceess Full');
    }
    try {
      await axios({
        method: 'POST',
        url: 'http://svcy3.myclass.vn/api/Users/signup',
        data: values,
      });
    } catch (err) {
      if (err.message.includes('400')) {
        Alert.alert('Email has been ');
      }
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          size={35}
          style={styles.backBotton}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={iconApp} style={styles.avatar} />
          </View>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', name: '', phone: ''}}
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
                <TextInput
                  title="Name"
                  placeholder="James"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  errorMessage={errors.name}
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                />
                <TextInput
                  title="Phone"
                  placeholder="038-xxx-xxx"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  errorMessage={errors.phone}
                  onBlur={handleBlur('phone')}
                  touched={touched.phone}
                />
                <TouchableOpacity
                  style={styles.bottomStyle}
                  onPress={handleSubmit}>
                  <Text>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
    // paddingVertical:20
  },
  avatar: {
    width: 150,
    height: 150,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    paddingTop: 100,
  },
  loginFrom: {
    flex: 3,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bottomStyle: {
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBotton: {paddingLeft: 15, top: 50},
});
