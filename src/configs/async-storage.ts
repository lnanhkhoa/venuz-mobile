import AsyncStorage from '@react-native-async-storage/async-storage';

export const ASYNC_STORAGE_KEY = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

export const saveAccessToken = async token => {
  try {
    if (token) {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY.ACCESS_TOKEN, token);
    } else {
      AsyncStorage.removeItem(ASYNC_STORAGE_KEY.ACCESS_TOKEN);
    }
  } catch (e) {
    console.error('saveAccessToken', e);
    // saving error
  }
};
export const loadAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem(ASYNC_STORAGE_KEY.ACCESS_TOKEN);
    return token;
  } catch (e) {
    console.log('loadAccessToken', e);
    // saving error
  }
};
