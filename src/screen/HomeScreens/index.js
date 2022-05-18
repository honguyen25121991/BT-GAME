import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {avatar} from '../../assets';
import {BackgroundView, Header, Text} from '../../components';
import {stackName} from '../../config/navigationConstants';
import {navigate} from '../../navigations/NavigationWithouProp';
import {requestListGame} from '../../redux/thunk/gameActionThunk';
import GameItem from './components/GameItem';

const HomeScreen = () => {
  const LeftComponent = (
    <View>
      <Text header>Hello , CyberSoft </Text>
    </View>
  );
  const onPressGoUser = () => {
    navigate(stackName.userScreen);
  };
  const RightComponent = (
    <TouchableOpacity onPress={() => onPressGoUser()}>
      <Image source={avatar} style={styles.avatar} />
    </TouchableOpacity>
  );

  return (
    <BackgroundView>
      <Header LeftComponent={LeftComponent} RightComponent={RightComponent} />
    </BackgroundView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
