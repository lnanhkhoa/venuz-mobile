import { GlobalLib } from 'services';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { us } from 'theme';
import { toastConfig } from 'components';
import Toast from 'react-native-toast-message';

function Root({ children }) {
  return (
    <View style={us.flex1}>
      {children}
    <StatusBar animated barStyle={'dark-content'} hidden={false} />
      <Toast config={toastConfig} />
    </View>
  );
}

export default Root;
