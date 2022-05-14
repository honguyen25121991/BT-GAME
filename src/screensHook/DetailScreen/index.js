import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import IconButton from 'react-native-vector-icons/AntDesign';
import IconStarHalf from 'react-native-vector-icons/FontAwesome';
import IconDownload from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {BackgroundView, Text} from '../../components';
import {tabName} from '../../config/navigationConstants';
import {navigate} from '../../navigations/NavigationWithouProp';
import {requestGameDetail} from '../../redux/thunk/gameActionThunk';
import {COLORS} from '../../themes/styles';
import {sWidth} from '../../utils';

const DetailScreenHook = ({navigation, route}) => {
  const game = useSelector(state => state.gameReduces.game);
  const dispatch = useDispatch();

  const renderStart = () => {
    const {rating} = game;
    const listStar = [];
    for (let index = 0; index < Math.floor(rating); index++) {
      listStar.push(
        <IconButton
          name="star"
          size={20}
          color={COLORS.lightPurple}
          key={index}
        />,
      );
    }
    if (5 - rating > 0.5) {
      listStar.push(
        <IconStarHalf
          name="star-half-empty"
          size={20}
          color={COLORS.lightPurple}
          key={6}
        />,
      );
    } else {
      listStar.push(
        <IconButton name="star" size={20} color={COLORS.lightPurple} key={7} />,
      );
    }
    listStar.push(
      <Text key={8} style={{paddingLeft: 5}}>
        {rating}
      </Text>,
    );
    return listStar;
  };

  useEffect(() => {
    dispatch(requestGameDetail(route.params.id));
  });
  const {title, subTitle, icon, preview, description, age} = game;
  const imagesBackground = preview ? preview[0] : undefined;
  return (
    <BackgroundView edges={['bottom']}>
      <Image source={{uri: imagesBackground}} style={[styles.gameImage]} />

      <BackgroundView style={{backgroundColor: 'red'}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <IconButton name="close" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </BackgroundView>
      <View style={styles.bannerMid}>
        <View style={{flex: 2}}>
          <Image source={{uri: icon}} style={styles.iconImage} />
        </View>
        <View style={styles.bannerText}>
          <Text bold title>
            {title}
          </Text>
          <Text subText>{subTitle}</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.downloadButton}>
            <TouchableOpacity
              onPress={() => {
                navigate(tabName.downLoadTab);
              }}>
              <IconDownload
                name="cloud-download"
                size={35}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {renderStart()}
        </View>
        <View>
          <Text>{age}</Text>
        </View>
        <View>
          <Text>Game of the day </Text>
        </View>
      </View>
      <FlatList
        style={{flexGrow: 0, marginTop: 10}}
        data={preview}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{height: 200, width: 350, borderRadius: 10}}
          />
        )}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToInterval={350}
      />
      <View>
        <Text
          style={{
            paddingHorizontal: 20,
            marginTop: 5,
          }}
          subText>
          {description}
        </Text>
      </View>
    </BackgroundView>
  );
};

export default DetailScreenHook;

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.7,
    position: 'absolute',
    top: -280,
    left: 15,
  },
  gameImage: {
    width: sWidth,
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  bannerMid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  bannerText: {
    flex: 5,
    paddingHorizontal: 10,
  },
  downloadButton: {
    backgroundColor: COLORS.lightPurple,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
