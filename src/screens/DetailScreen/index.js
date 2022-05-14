import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import IconButton from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Header, Text} from '../../components';
import {COLORS} from '../../themes/styles';
import axios from 'axios';
import {mapLocalHostToIp, mapLocalHostToIp1, sWidth} from '../../utils';
import IconDownload from 'react-native-vector-icons/Ionicons';
import IconStarHalf from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {requestGameDetail} from '../../redux/thunk/gameActionThunk';
import {navigate, goBack} from '../../navigations/NavigationWithouProp';

//locahost => 10.2.2.2 convert

class DetailScreen extends Component {
  // state = {
  //   game: {},
  //   loading: false,
  // };

  renderStart = () => {
    const {
      game: {rating},
    } = this.props;
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
  componentDidMount() {
    // axios({
    //   method: 'GET',
    //   url: `http://10.0.2.2:3000/games/${this.props.route.params.id}`,
    // })
    //   .then(res => {
    //     const game = mapLocalHostToIp(res.data);
    //     this.props.setGameDetail(game);
    //     // this.setState({game: res.data});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.props.dispatch(requestGameDetail(this.props.route.params.id));
  }
  onPressBackHome = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {
      game: {title, subTitle, icon, preview, description, age},
    } = this.props;
    const imagesBackground = preview ? preview[0] : undefined;
    return (
      <BackgroundView edges={['bottom']}>
        <Image source={{uri: imagesBackground}} style={[styles.gameImage]} />

        <BackgroundView style={styles.bannerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.onPressBackHome()}>
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
              <IconDownload
                name="cloud-download"
                size={35}
                color={COLORS.white}
              />
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
            {this.renderStart()}
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
  }
}

// const mapDispatchToProps = dispatch => ({
//   setGameDetail: game => dispatch(setGameDetail(game)),
// });
const mapStateToProps = state => ({
  game: state.gameReduces.game,
});
export default connect(mapStateToProps)(DetailScreen);
// const mapDispatchToProps = dispatch => ({
//   setGameDetail: game => dispatch(setGameDetail(game)),
// });
// const mapStateToProps = state => ({
//   game: state.gameReduces.game,
// });
// export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

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
  },
  gameImage: {
    width: sWidth,
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  bannerContainer: {position: 'absolute', top: 15, left: 10},
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
