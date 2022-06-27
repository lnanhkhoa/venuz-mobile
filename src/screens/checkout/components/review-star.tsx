import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text, Icon } from 'components';
import React from 'react';
import { us } from 'theme';

interface ReviewStarProps {
  containerStyle: StyleProp<ViewStyle>;
  amount: number;
  point: number;
}

export function ReviewStar({ containerStyle, point, amount }: ReviewStarProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {new Array(5).fill(1).map((i, index) => {
        return (
          <Icon key={index.toString()} icon={point > index ? 'star' : 'star-outline'} size={18} />
        );
      })}
      <Text text={`${amount} Reviews`} style={us.mlBase} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
