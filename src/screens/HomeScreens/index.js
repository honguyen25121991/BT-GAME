import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {BackgroundView, Text, Header} from '../../components';
import GameItem from './components/GameItem';
import {avatar} from '../../assets';
import {stackName} from '../../config/navigationConstants';
import {connect} from 'react-redux';
import {requestListGame} from '../../redux/thunk/gameActionThunk';

class HomeScreen extends Component {
  // state = {
  //   listGame: [],
  //   game: {},
  // };

  LeftComponent = (
    <View>
      <Text header>Hello , CyberSoft </Text>
      <Text bold>Best games for today </Text>
    </View>
  );

  RightComponent = (
    <TouchableOpacity onPress={() => this.onPressGoUser()}>
      <Image source={avatar} style={styles.avatar} />
    </TouchableOpacity>
  );

  // onPressGameItem = id => {
  //   this.props.navigation.navigate(stackName.detailStack, {id});
  // };
  onPressGoUser = () => {
    this.props.navigation.navigate(stackName.userScreen);
  };
  componentDidMount() {
    this.props.dispatch(requestListGame());

    // axios({method: 'GET', url: 'http://10.0.2.2:3000/games'})
    //   .then(res => {
    //     const listGame = mapLocalHostToIp(res.data);
    //     this.props.setListGame(listGame);
    //     this.setState({listGame: res.data});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  render() {
    // const {listgame} = this.state;
    const {listGame} = this.props;
    return (
      <BackgroundView>
        <Header
          LeftComponent={this.LeftComponent}
          RightComponent={this.RightComponent}
        />
        <FlatList
          data={listGame}
          renderItem={({item}) => (
            <GameItem
              game={item}
              id={item.id}
              // onPress={() => this.onPressGameItem(item.id)}
              navigate={this.props.navigation.navigate}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 70}} />}
          contentContainerStyle={{paddingBottom: 70}}
        />
      </BackgroundView>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//   setListGame: listGame => dispatch(setListGame(listGame)),
// });
const mapStateToProps = state => ({
  listGame: state.gameReduces.listGame,
});
export default connect(mapStateToProps)(HomeScreen);
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
