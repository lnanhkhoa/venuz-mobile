import { View, ViewStyle, ImageStyle, FlatList, useWindowDimensions } from 'react-native';
import React, { useCallback } from 'react';

import { Button, Header, Image, Screen, Text, textPresets } from 'components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';

import DEMO from '../home/assets/data/demo';
import { color, spacing, us } from 'theme';
import { ReviewStar } from './components';
import { AppConstants } from 'configs';

function useStyle() {
  const { width, height } = useWindowDimensions();

  const imageStyle: ImageStyle = {
    width: (width - 4 * spacing.medium) / 2,
    height: 240,
    borderRadius: 4,
  };
  return { imageStyle };
}

export function WishlistScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { imageStyle } = useStyle();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={[us.pMedium, us.flex1]}>
        <View style={{}}>
          <Image source={item.image} style={imageStyle} />
          <View style={[us.flex1, us.justifyCenter]}>
            <Text preset={'h5'} text={item.name} style={us.mtBase} />
            <View style={[us.rowAlign, us.justifyBetween, us.flexWrap]}>
              <Text preset={'h5'} text={`Color: `} style={us.mtBase} />
              <Text preset={'h5'} text={`Size: L`} />
            </View>
          </View>
        </View>
        <Text preset={'h5'} text={'$4563'} color={'#F75B75'} />
        <Button
          text="Add to bag"
          textStyle={{ color: color.white }}
          style={{ borderRadius: 4, marginTop: 10 }}
          containerStyle={{ alignSelf: 'center' }}
        />
      </View>
    );
  }, []);

  return (
    <Screen style={CONTAINER}>
      <Header unsafe headerText="Wishlist" titleStyle={textPresets.h3bold} />
      <FlatList
        data={DEMO}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: spacing.double }}
      />
    </Screen>
  );
}

const CONTAINER: ViewStyle = {};
