import React, { ErrorInfo } from 'react';
import { TextStyle, View, ViewStyle, ScrollView } from 'react-native';
import { color } from 'theme';
import { Button, Text } from 'components';

const CONTAINER: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: color.background,
};

const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: '100%',
  maxHeight: '60%',
  backgroundColor: color.line,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
};

const BTN_RESET: ViewStyle = {
  paddingHorizontal: 40,

  backgroundColor: color.background,
};

const TITLE_ERROR: TextStyle = {
  color: color.red,
  fontWeight: 'bold',
  paddingVertical: 15,
};

const FRIENDLY_SUBTITLE: TextStyle = {
  color: color.black,
  fontWeight: 'normal',
  paddingVertical: 15,
};

const CONTENT_ERROR: TextStyle = {
  color: color.red,
  fontWeight: 'bold',
  paddingVertical: 15,
};

// Uncomment this and the Text component in the ErrorComponent if
// you want to see a backtrace in your error reporting screen.
// const CONTENT_BACKTRACE: TextStyle = {
//   color: color.dim,
// }
export interface ErrorComponentProps {
  error: Error;
  errorInfo?: ErrorInfo;
  onReset(): void;
}

/**
 * Describe your component here
 */
export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View style={CONTAINER}>
      <Text style={TITLE_ERROR} text="TITLE_ERROR" />
      <Text style={FRIENDLY_SUBTITLE} text="FRIENDLY_SUBTITLE" />
      <View style={ERROR_DETAILS_CONTAINER}>
        <ScrollView>
          <Text selectable style={CONTENT_ERROR} text={`${props.error}`} />
          {/* <Text selectable style={CONTENT_BACKTRACE} text={`${props.errorInfo.componentStack}`} /> */}
        </ScrollView>
      </View>
      <Button style={BTN_RESET} onPress={props.onReset} text="RESET APP" />
    </View>
  );
};
