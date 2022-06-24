import { Platform, Dimensions } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const IS_ANDROID = Platform.OS === 'android';
const ENABLE_PUSH_NOTIFICATION = false;

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export const AppConstants = {
  isIOS: IS_IOS,
  isAndroid: IS_ANDROID,
  ENABLE_PUSH_NOTIFICATION,
  headerHeight: 60,
  bottomViewHeight: 90,
  DIMENSION_WIDTH,
  DIMENSION_HEIGHT,
};
