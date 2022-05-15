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
  const listGame = useSelector(state => state.gameReduces.listGame);
  const dispatch = useDispatch();
  const LeftComponent = (
    <View>
      <Text header>Hello , CyberSoft </Text>
      <Text bold>Best games for today </Text>
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

  useEffect(() => {
    dispatch(requestListGame());
  }, []);
  return (
    <BackgroundView>
      <Header LeftComponent={LeftComponent} RightComponent={RightComponent} />
      <FlatList
        data={listGame}
        renderItem={({item}) => <GameItem game={item} id={item.id} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 70}} />}
        contentContainerStyle={{paddingBottom: 70}}
      />
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
