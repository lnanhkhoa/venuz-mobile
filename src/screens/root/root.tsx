import { GlobalLib } from 'services';
import React from 'react';
import { View } from 'react-native';
import { us } from 'theme';
import { toastConfig } from 'components';
import Toast from 'react-native-toast-message';

function Root({ children }) {
  return (
    <View style={us.flex1}>
      {children}
      <Toast config={toastConfig} />
    </View>
  );
}

export default Root;
