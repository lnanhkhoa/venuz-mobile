import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  StyleSheet,
  ImageStyle,
  StyleProp,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { CardItemT } from '../types';
import { color, spacing, us } from 'theme';
import { AppConstants } from 'configs';
import { Icon, Text } from 'components';
import { PaginatedIndicator } from './paginated-indicator';

const CardItem = ({ hasActions, image, isOnline, price, name }: CardItemT) => {
  const { width: fullWidth, height: fullHeight } = useWindowDimensions();
  const bottomTabHeight = useBottomTabBarHeight();
  //
  const imageStyle: StyleProp<ImageStyle> = [
    {
      width: fullWidth - 2 * spacing.double,
      height: fullHeight - bottomTabHeight - AppConstants.headerHeight - 2 * spacing.double,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground style={imageStyle} source={image}>
        <View style={us.flex1}>
          <View style={styles.header}>
            <PaginatedIndicator current={4} total={5} />
          </View>
          <View style={styles.body}></View>
          <View style={styles.bottom}>
            <View style={styles.content}>
              <View style={[us.rowAlign, us.justifyBetween, us.pbBase]}>
                <Text preset="h3" color={color.text} text={name} />
                <Icon icon="info" size={24} color={color.red} />
              </View>
              <Text preset="h4" color={color.text} text={`$${price}`} />
            </View>

            {/* ACTIONS */}
            {hasActions && (
              <View style={styles.actionsCardItem}>
                <TouchableOpacity
                  style={[styles.button, { borderColor: STAR_ACTIONS, borderWidth: 2 }]}>
                  <Icon icon="back" color={STAR_ACTIONS} size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { borderColor: DISLIKE_ACTIONS, borderWidth: 2 }]}>
                  <Icon icon="error" color={DISLIKE_ACTIONS} size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { borderColor: LIKE_ACTIONS, borderWidth: 2 }]}>
                  <Icon icon="like" color={LIKE_ACTIONS} size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, { borderColor: SEND_ACTIONS, borderWidth: 2 }]}>
                  <Icon icon="send" color={SEND_ACTIONS} size={25} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardItem;

export const ONLINE_STATUS = '#46A575';
export const OFFLINE_STATUS = '#D04949';

export const STAR_ACTIONS = '#B69C9C';
export const LIKE_ACTIONS = '#1D9940';
export const DISLIKE_ACTIONS = '#C62A2A';
export const SEND_ACTIONS = '#8A0A85';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.red,
    justifyContent: 'flex-end',
    borderRadius: 20,
    elevation: 5,
    shadowColor: color.black,
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: 'hidden',
    marginVertical: spacing.double,
  },
  header: {},
  body: {
    flex: 1,
  },
  bottom: {},
  content: {
    padding: spacing.double,
    backgroundColor: 'rgba(255,255,255, 0.6)',
  },
  actionsCardItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: color.white,
    borderRadius: 30,
    elevation: 1,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 7,
    shadowColor: color.darkGray,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    width: 60,
  },
});
