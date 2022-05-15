import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {sWidth} from '../../../utils';
import {Text} from '../../../components';
import {stackName} from '../../../config/navigationConstants';
import {navigate} from '../../../navigations/NavigationWithouProp';

export default class GameItem extends Component {
  onPress = () => {
    navigate(stackName.detailStack, {id: this.props.id});
  };
  render() {
    const {
      game: {title, subTitle, icon, preview, backgroundColor},
    } = this.props;

    const backgroundImage = preview ? preview[0] : undefined;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: backgroundImage}}
          style={styles.imagesBackground}
        />
        <TouchableOpacity
          style={[styles.bannerContainer, {backgroundColor}]}
          onPress={this.onPress}>
          <Image source={{uri: icon}} style={styles.imageIcon} />
          <View style={styles.titleContainer}>
            <Text bold>{title}</Text>
            <Text subText>{subTitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {zIndex: 1},
  imagesBackground: {
    height: 200,
    width: sWidth,
    backgroundColor: '#bff',
  },
  bannerContainer: {
    position: 'absolute',
    bottom: -45,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sWidth - 40,
  },
  imageIcon: {
    height: 70,
    width: 70,
    backgroundColor: '#bbb',
    borderRadius: 8,
  },
  titleContainer: {width: '77%'},
});
