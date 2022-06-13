import { Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const IS_ANDROID = Platform.OS === 'android';
const ENABLE_PUSH_NOTIFICATION = false;

export const AppConstants = {
  isIOS: IS_IOS,
  isAndroid: IS_ANDROID,
  ENABLE_PUSH_NOTIFICATION,
};
