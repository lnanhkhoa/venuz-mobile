import React, { useRef, useState } from 'react';
import { View, ViewStyle, TextStyle, ImageBackground, Pressable } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
//
import { Header, Screen, Text, TextInput, textPresets, Icon, withBadge } from 'components';
import { CardItem, Message, ProfileItem } from './components';

import DEMO from './assets/data/demo';
import { spacing, uf, us, color } from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const BadgedIcon = withBadge(1, { top: -4, right: -3 })(Icon);

export function HomeScreen() {
  const navigation = useNavigation();
  const swiper = useRef<CardStack | null>(null);

  return (
    <Screen unsafe style={[us.flex1, uf.setBg(color.background)]}>
      <Header
        headerText="VENUZ"
        titleStyle={textPresets.h3bold}
        RightIcon={() => (
          <Pressable onPress={() => navigation.navigate('CheckoutScreen')}>
            <BadgedIcon icon="shopping" size={25} />
          </Pressable>
        )}
      />
      <View style={us.flex1}>
        <CardStack loop style={CONTENT} renderNoMoreCards={() => null} ref={swiper}>
          {DEMO.map(item => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                swipeRight={() => swiper.current.swipeRight()}
                swipeLeft={() => swiper.current.swipeLeft()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </Screen>
  );
}

const CONTENT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
