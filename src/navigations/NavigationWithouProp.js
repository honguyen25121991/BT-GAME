import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

const navigationWithouProp = {
  navigate: (screenName, param) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(screenName, param);
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
  canGoBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.canGoBack();
    }
  },
};

export const navigate = navigationWithouProp.navigate;
export const goBack = navigationWithouProp.goBack;
export const canGoBack = navigationWithouProp.canGoBack;
