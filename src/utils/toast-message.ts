import Toast, { ToastShowParams } from 'react-native-toast-message';

export const showToastMessage = (
  message: string,
  type: 'info' | 'success' | 'error',
  moreProps?: ToastShowParams
) => {
  if (message) {
    Toast.show({
      type: type,
      position: 'top',
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 0,
      topOffset: 0,
      ...moreProps,
    });
  }
};
