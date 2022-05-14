import {Dimensions, Platform} from 'react-native';
const {height: sHeight, width: sWidth} = Dimensions.get('window');

const mapLocalHostToIp = source => {
  if (Platform.OS === 'android') {
    if (Array.isArray(source)) {
      return source.map(gameItems => {
        gameItems.icon = gameItems.icon.replace('localhost', '10.0.2.2');
        gameItems.preview = gameItems.preview.map(item =>
          item.replace('localhost', '10.0.2.2'),
        );
        return gameItems;
      });
    }
    source.icon = source.icon.replace('localhost', '10.0.2.2');
    source.preview = source.preview.map(item =>
      item.replace('localhost', '10.0.2.2'),
    );
    return source;
  }
};

export {sWidth, sHeight, mapLocalHostToIp};
