import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.StreamScreen';
import {BackgroundView, Text} from '../../components/index';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes/styles';
import {getListGame} from '../../api';
import {mapIP} from '../../utils/common';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestListGame} from '../../redux/thunk/gameThunkAction';
import {getListGameSelector} from '../../redux/selectors/gameSelector';

const StreamScreen = () => {
  const dispatch = useDispatch();
  const listGame = useSelector(getListGameSelector);

  useEffect(() => {
    dispatch(getRequestListGame());
  }, []);

  return (
    <BackgroundView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Streaming</Text>
        <View>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor={COLORS.opacityWhite}
            style={styles.search}
          />
          <AntIcon
            style={styles.searchIcon}
            name="search1"
            color={COLORS.opacityWhite}
            size={23}
          />
        </View>
      </View>
      <View style={styles.popularGameContainer}>
        <Text color={COLORS.opacityWhite}>Popular Game</Text>
        <FlatList
          style={{flexGrow: 0, marginTop: 10}}
          horizontal
          data={listGame}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <Image style={styles.imagePopularGame} source={{uri: item.icon}} />
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 30,
        }}>
        <View>
          <Text title bold style={{fontSize: 16}}>
            Live Games
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text color={COLORS.lightPurple}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.liveContainer}>
        <View>
          <FlatList
            data={listGame}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 10,
                  top: 5,
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.lightPurple,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    marginRight: 5,
                  }}>
                  <Text title fontNormal>
                    Alto's Odyssey
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: COLORS.lightRed,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                  }}>
                  <Text title fontNormal>
                    Live
                  </Text>
                </View>
              </View>
            )}
            renderItem={({item}) => (
              <ImageBackground
                style={styles.liveGameBanner}
                source={{uri: item.preview[0]}}
              />
            )}
          />
        </View>
      </View>
    </BackgroundView>
  );
};

export default StreamScreen;
