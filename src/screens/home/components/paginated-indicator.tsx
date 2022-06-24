import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import React from 'react';
import { color, spacing, us } from 'theme';

interface PaginatedIndicatorProps {
  current: number;
  total: number;
}

export function PaginatedIndicator({ current = 0, total }: PaginatedIndicatorProps) {
  const listItems = new Array(total).fill(1);
  const { width: fullWidth } = useWindowDimensions();
  const itemWidth = (fullWidth - 4 * spacing.double - spacing.tiny * (total - 1)) / total;
  const itemStyle: ViewStyle = {
    width: itemWidth,
    height: 5,
    backgroundColor: color['white-500'],
    marginRight: spacing.tiny,
    borderRadius: 99,
  };

  return (
    <View style={[us.rowAlign, us.ptMedium, us.justifyCenter]}>
      {listItems.map((i, index) => {
        const activeItemStyle: ViewStyle = {
          backgroundColor: current > index ? color['white-300'] : color['white-500'],
        };
        return <View style={[itemStyle, activeItemStyle]} key={index.toString()} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
