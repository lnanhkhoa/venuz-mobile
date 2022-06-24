import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
//
import { Header, Screen, Text, TextInput, textPresets, Icon, withBadge } from 'components';
import { CardItem, Message, ProfileItem } from './components';

import DEMO from './assets/data/demo';
import { useSampleStore } from 'models/sampleStore';
import { spacing, uf, us, color } from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomeScreen() {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const BadgedIcon = withBadge(1, { top: -4, right: -3 })(Icon);

  return (
    <Screen unsafe style={[us.flex1, uf.setBg(color.background)]}>
      <Header
        headerText="VENUZ"
        titleStyle={textPresets.h3bold}
        RightIcon={() => <BadgedIcon icon="shopping" size={25} />}
      />
      <View style={us.flex1}>
        <CardStack
          style={CONTENT}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}>
          {DEMO.map(item => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
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
