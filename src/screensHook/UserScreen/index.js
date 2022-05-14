import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconButton from 'react-native-vector-icons/Entypo';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes/styles';
import {goBack} from '../../navigations/NavigationWithouProp';

const UserScreenHook = () => {
  return (
    <BackgroundView>
      <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
        <IconButton name="back" size={20} color={COLORS.opacityWhite} />
      </TouchableOpacity>
      <Text>UserHook</Text>
    </BackgroundView>
  );
};
export default UserScreenHook;
const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.7,
  },
});
