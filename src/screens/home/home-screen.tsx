import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CardStack, { Card } from 'react-native-card-stack-swiper';
//
import { Screen, Text, TextInput } from 'components';
import { CardItem, City, Filters, Icon, Message, ProfileItem } from './components';
import styles from './assets/styles';
import DEMO from './assets/data/demo';

export function HomeScreen() {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground source={require('./assets/images/bg.png')} style={styles.bg}>
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}>
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
}
const CONTAINER: ViewStyle = {};
