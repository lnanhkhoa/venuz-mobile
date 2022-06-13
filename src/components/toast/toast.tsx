import { Icon } from 'components/icon/icon';
import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle, Text, useWindowDimensions } from 'react-native';
import { us } from 'theme/utility-styles';
import { color } from 'theme';
import { presets } from 'components/text/text.presets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TBaseToast = {
  text: string;
  containerStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  iconName: string;
  numberOfLines?: number;
};
const BaseToast: React.FC<TBaseToast> = ({
  text,
  iconName,
  containerStyle,
  textStyle,
  numberOfLines = 2,
}) => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  return (
    <View
      style={[
        CONTAINER,
        { paddingTop: insets.top + height, marginTop: -height, paddingBottom: 16 },
        containerStyle,
      ]}>
      {iconName && <Icon icon={iconName} size={24} containerStyle={[us.mxDouble]} />}
      {text?.length > 0 && (
        <Text numberOfLines={numberOfLines} style={[us.flex1, textStyle]}>
          {text}
        </Text>
      )}
    </View>
  );
};

type TSuccessToast = {
  text: string;
};
export const SuccessToast: React.FC<TSuccessToast> = ({ text }) => {
  return (
    <BaseToast
      containerStyle={SUCCESS_CONTAINER}
      textStyle={SUCCESS_TEXT}
      text={text}
      iconName="check"
    />
  );
};
type TErrorToast = {
  text: string;
};
export const ErrorToast: React.FC<TErrorToast> = ({ text }) => {
  return (
    <BaseToast
      containerStyle={ERROR_CONTAINER}
      textStyle={ERROR_TEXT}
      text={text}
      iconName="info"
    />
  );
};

export const toastConfig = {
  success: ({ text1 = '' }) => <SuccessToast text={text1} />,
  error: ({ text1 = '' }) => <ErrorToast text={text1} />,
};

const ERROR_TEXT: TextStyle = {
  color: color.skyLightest,
  ...presets['text-small14'],
};
const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
const SUCCESS_TEXT: TextStyle = {
  color: color.white,
  ...presets['text-small14'],
};
const SUCCESS_CONTAINER: ViewStyle = {
  backgroundColor: color.greenPrimary,
};
const ERROR_CONTAINER: ViewStyle = {
  backgroundColor: color.redPrimary,
};
