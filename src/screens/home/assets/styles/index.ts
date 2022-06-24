import { StyleSheet, Dimensions } from 'react-native';

export const PRIMARY_COLOR = '#7444C0';
export const SECONDARY_COLOR = '#5636B8';
export const WHITE = '#FFFFFF';
export const GRAY = '#757E90';
export const DARK_GRAY = '#363636';
export const BLACK = '#000000';

export const ONLINE_STATUS = '#46A575';
export const OFFLINE_STATUS = '#D04949';

export const STAR_ACTIONS = '#FFA200';
export const LIKE_ACTIONS = '#B644B2';
export const DISLIKE_ACTIONS = '#363636';
export const FLASH_ACTIONS = '#5028D7';

export const DIMENSION_WIDTH = Dimensions.get('window').width;
export const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    borderRadius: 20,
    elevation: 1,
    padding: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    width: 100,
  },
  cityText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: 'center',
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    borderRadius: 20,
    elevation: 1,
    padding: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    width: 90,
  },
  filtersText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: 'center',
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
    width: 60,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 1,
    margin: 20,
    marginTop: -65,
    paddingBottom: 25,
    paddingHorizontal: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  matchesProfileItem: {
    alignSelf: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    marginTop: -15,
    paddingHorizontal: 20,
    paddingVertical: 7,
    width: 135,
  },
  matchesTextProfileItem: {
    color: WHITE,
    textAlign: 'center',
  },
  name: {
    color: DARK_GRAY,
    fontSize: 15,
    paddingBottom: 5,
    paddingTop: 25,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: GRAY,
    fontSize: 13,
    paddingBottom: 20,
    textAlign: 'center',
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  iconProfile: {
    color: DARK_GRAY,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
  },

  // CONTAINER - GENERAL
  bg: {
    flex: 1,
    height: DIMENSION_HEIGHT,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingTop: 50,
  },
  title: { color: DARK_GRAY, fontSize: 22, paddingBottom: 10 },

  // CONTAINER - HOME
  containerHome: {
    flex: 1,
    marginHorizontal: 10,
  },

  // CONTAINER - MATCHES
  containerMatches: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  // CONTAINER - PROFILE
  containerProfile: { marginHorizontal: 0 },
  photo: {
    height: 450,
    width: DIMENSION_WIDTH,
  },
  topIconLeft: {
    paddingLeft: 20,
  },
  topIconRight: {
    paddingRight: 20,
  },
  actionsProfile: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textButton: {
    color: WHITE,
    fontSize: 15,
    paddingLeft: 5,
  },
  circledButton: {
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginRight: 10,
    width: 50,
  },
  roundedButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginLeft: 10,
    paddingHorizontal: 20,
  },

  // MENU
  tabButtonText: {
    textTransform: 'uppercase',
  },
  iconMenu: {
    alignItems: 'center',
  },
});
