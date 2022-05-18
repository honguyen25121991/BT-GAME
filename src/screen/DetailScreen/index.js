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

const DetailScreen = ({navigation, route}) => {
  const game = useSelector(state => state.gameReduces.game);

  return <BackgroundView edges={['bottom']}></BackgroundView>;
};

export default DetailScreen;

const styles = StyleSheet.create({});
