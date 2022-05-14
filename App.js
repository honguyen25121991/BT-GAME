import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/rootStore';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/rootNavigation';
import {navigationRef} from './src/navigations/NavigationWithouProp';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        {/* <View style={{backgroundColor: 'red'}}>
          <Text>Hien tai dang bao tri</Text>
        </View> */}
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
