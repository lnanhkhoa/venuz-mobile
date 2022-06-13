import * as React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { presets } from './text.presets';
import { TextProps } from './text.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  const { preset, text, children, color, style: styleOverride, ...rest } = props;
  const content = text || children;
  const style = presets[preset || 'default'];
  const styles = [style, color ? { color } : null, styleOverride];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
