import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { ActivityIndicator, ViewStyle, View } from 'react-native';
import { color } from 'theme';

const Loading: ForwardRefRenderFunction<LoadingHandle, LoadingProps> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      show: () => setVisible(true),
      hide: () => setVisible(false),
    }),
    [],
  );

  return visible ? (
    <View style={CONTAINER}>
      <ActivityIndicator size={'large'} color={color.white} />
    </View>
  ) : null;
};

export const GlobalLoadingView = forwardRef(Loading);

export interface LoadingHandle {
  show: () => void;
  hide: () => void;
}
interface LoadingProps {}

const CONTAINER: ViewStyle = {
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.black4,
};
