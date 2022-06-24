import { View, ViewStyle, ImageStyle, FlatList } from 'react-native';
import React, { useCallback } from 'react';

import { Button, Header, Image, Screen, Text, textPresets } from 'components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';

import DEMO from '../home/assets/data/demo';
import { color, spacing, us } from 'theme';
import { ReviewStar } from './components';
import { AppConstants } from 'configs';

export function WishlistScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const imageStyle: ImageStyle = {
    width: 100,
    height: 100,
    borderRadius: 10,
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={us.pDouble}>
        <View style={us.row}>
          <Image source={item.image} style={imageStyle} />
          <View style={[us.flex1, us.justifyCenter, us.mlMedium]}>
            <Text preset={'h5'} text={item.name} />
            <ReviewStar containerStyle={REVIEW} point={2} amount={102} />
            <Text preset={'h5bold'} text={`Size: L`} color={'#F75B75'} />
            <Text preset={'h6'} text={item.description} color={'#403A3B'} />
          </View>
        </View>
        <Text preset={'h5'} text={'$4563'} color={'#F75B75'} style={{ alignSelf: 'flex-end' }} />
      </View>
    );
  }, []);

  return (
    <Screen unsafe style={CONTAINER}>
      <Header unsafe headerText="Wishlist" titleStyle={textPresets.h3bold} />
      <FlatList data={DEMO} renderItem={renderItem} />
      <Shadow>
        <View style={[BOTTOM, { paddingBottom: insets.bottom }]}>
          <Text preset="h5" text={'$677'} />
          <Button
            text="ADD ALL TO CART"
            textStyle={{ color: color.white, ...textPresets.h4bold }}
            rightIcon="arrow-right"
            iconRightSize={22}
            iconRightColor={color.white}
            style={{ paddingVertical: 16, paddingHorizontal: 10 }}
          />
        </View>
      </Shadow>
    </Screen>
  );
}

const CONTAINER: ViewStyle = {};
const REVIEW: ViewStyle = {
  paddingVertical: spacing.tiny,
};
const BOTTOM: ViewStyle = {
  width: '100%',
  backgroundColor: color.white,
  flexDirection: 'row',
  alignItems: 'center',
  padding: spacing.double,
  minHeight: AppConstants.bottomViewHeight,
  justifyContent: 'space-between',
};
