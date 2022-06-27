import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
//
import { Screen, Text } from 'components';
import { color, uf, us } from 'theme';
import WebView from 'react-native-webview';
import { NProgress } from 'react-native-nprogress';
import { useIsFocused } from '@react-navigation/native';

export function StoreScreen() {
  const webViewRef = useRef();
  const [enabled, setEnabled] = useState(false);

  return (
    <Screen style={[us.flex1, uf.setBg(color.background)]}>
      <NProgress enabled={enabled} />
      <WebView
        onShouldStartLoadWithRequest={() => true}
        startInLoadingState
        allowFileAccess
        onLoadStart={() => {
          setEnabled(true);
        }}
        onLoadEnd={() => {
          setEnabled(false);
        }}
        useWebView2
        allowsLinkPreview
        javaScriptEnabled
        sharedCookiesEnabled
        scalesPageToFit
        source={{ uri: 'http://ec2-13-41-80-12.eu-west-2.compute.amazonaws.com/' }}
        showsHorizontalScrollIndicator={false}
        renderLoading={() => (
          <ActivityIndicator
            size={'large'}
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
        onLoadProgress={({ nativeEvent }) => {}}
      />
    </Screen>
  );
}
