import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MapView, {MarkerAnimated, PROVIDER_GOOGLE} from 'react-native-maps';
import {goBack} from '../../navigations/NavigationWithouProp';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MappingScreen = () => {
  const onPressBack = () => {
    goBack();
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 10.771663,
          longitude: 106.669631,
          latitudeDelta: 0.016,
          longitudeDelta: 0.013,
        }}>
        <MarkerAnimated
          coordinate={{
            latitude: 10.771663,
            longitude: 106.669631,
          }}
          title={'Khải Sneaker'}
          description={'379 sư vạn hạnh quận 10'}
        />
      </MapView>
      <TouchableOpacity style={styles.buttonBack} onPress={onPressBack}>
        <Ionicons name="arrow-back" size={50} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonBack: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
export default MappingScreen;
