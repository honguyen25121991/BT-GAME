import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {MarkerAnimated, PROVIDER_GOOGLE} from 'react-native-maps';
const MappingScreen = () => {
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
          title="Khải Sneaker"
          description="379 sư vạn hạnh quận 10"
        />
      </MapView>
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
});
export default MappingScreen;
