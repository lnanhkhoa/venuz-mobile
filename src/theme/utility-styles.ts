import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, SpacingKeys } from './spacing';

export type NamedStyle = ViewStyle | ImageStyle | TextStyle;

export const us = StyleSheet.create({
  flex1: { flex: 1 },
  flexNowrap: {
    flexWrap: 'nowrap',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },

  itemsCenter: { alignItems: 'center' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsStart: { alignItems: 'flex-start' },

  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyStart: { justifyContent: 'flex-start' },

  // margin
  mBase: { margin: spacing.base },
  mDouble: { margin: spacing.double },
  mMedium: { margin: spacing.medium },
  mSmall: { margin: spacing.small },
  mTiny: { margin: spacing.tiny },

  mb0: { marginBottom: 0 },
  mbBase: { marginBottom: spacing.base },
  mbDouble: { marginBottom: spacing.double },
  mbLarge: { marginBottom: spacing.large },
  mbMedium: { marginBottom: spacing.medium },
  mbSmall: { marginBottom: spacing.small },
  mbTiny: { marginBottom: spacing.tiny },
  mbSectionX: { marginBottom: spacing.sectionX },

  ml0: { marginLeft: 0 },
  mlBase: { marginLeft: spacing.base },
  mlDouble: { marginLeft: spacing.double },
  mlMedium: { marginLeft: spacing.medium },
  mlSmall: { marginLeft: spacing.small },
  mlTiny: { marginLeft: spacing.tiny },

  mr0: { marginRight: 0 },
  mrBase: { marginRight: spacing.base },
  mrDouble: { marginRight: spacing.double },
  mrMedium: { marginRight: spacing.medium },
  mrSmall: { marginRight: spacing.small },
  mrTiny: { marginRight: spacing.tiny },

  mt0: { marginTop: 0 },
  mtBase: { marginTop: spacing.base },
  mtDouble: { marginTop: spacing.double },
  mtMedium: { marginTop: spacing.medium },
  mtSmall: { marginTop: spacing.small },
  mtLarge: { marginTop: spacing.large },
  mtTiny: { marginTop: spacing.tiny },
  mtSectionX: { marginTop: spacing.sectionX },

  mx0: { marginHorizontal: 0 },
  mxBase: { marginHorizontal: spacing.base },
  mxDouble: { marginHorizontal: spacing.double },
  mxMedium: { marginHorizontal: spacing.medium },
  mxLarge: { marginHorizontal: spacing.large },
  mxSmall: { marginHorizontal: spacing.small },
  mxTiny: { marginHorizontal: spacing.tiny },

  my0: { marginVertical: 0 },
  myBase: { marginVertical: spacing.base },
  myDouble: { marginVertical: spacing.double },
  myMedium: { marginVertical: spacing.medium },
  mySmall: { marginVertical: spacing.small },
  myTiny: { marginVertical: spacing.tiny },
  mySectionX: { marginVertical: spacing.sectionX },

  // padding
  pBase: { padding: spacing.base },
  pDouble: { padding: spacing.double },
  pMedium: { padding: spacing.medium },
  pSmall: { padding: spacing.small },
  pTiny: { padding: spacing.tiny },

  pb0: { paddingBottom: 0 },
  pbBase: { paddingBottom: spacing.base },
  pbDouble: { paddingBottom: spacing.double },
  pbMedium: { paddingBottom: spacing.medium },
  pbSmall: { paddingBottom: spacing.small },
  pbTiny: { paddingBottom: spacing.tiny },

  pl0: { paddingLeft: 0 },
  plBase: { paddingLeft: spacing.base },
  plDouble: { paddingLeft: spacing.double },
  plMedium: { paddingLeft: spacing.medium },
  plSmall: { paddingLeft: spacing.small },
  plTiny: { paddingLeft: spacing.tiny },

  pr0: { paddingRight: 0 },
  prBase: { paddingRight: spacing.base },
  prDouble: { paddingLeft: spacing.double },
  prMedium: { paddingRight: spacing.medium },
  prSmall: { paddingRight: spacing.small },
  prTiny: { paddingRight: spacing.tiny },

  pt0: { paddingTop: 0 },
  ptBase: { paddingTop: spacing.base },
  ptDouble: { paddingTop: spacing.double },
  ptMedium: { paddingTop: spacing.medium },
  ptSmall: { paddingTop: spacing.small },
  ptTiny: { paddingTop: spacing.tiny },

  px0: { paddingHorizontal: 0 },
  pxBase: { paddingHorizontal: spacing.base },
  pxDouble: { paddingHorizontal: spacing.double },
  pxMedium: { paddingHorizontal: spacing.medium },
  pxSmall: { paddingHorizontal: spacing.small },
  pxTiny: { paddingHorizontal: spacing.tiny },

  py0: { paddingVertical: 0 },
  pyBase: { paddingVertical: spacing.base },
  pyMedium: { paddingVertical: spacing.medium },
  pySmall: { paddingVertical: spacing.small },
  pyTiny: { paddingVertical: spacing.tiny },
  pyInput: { paddingVertical: spacing.input },

  row: {
    flexDirection: 'row',
  },
  rowAlign: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hidden: {
    display: 'none',
  },
});

export const uf = {
  setBg: (color: string) => ({ backgroundColor: color }),
  setColor: (color: string) => ({ color: color }),

  p: (key: SpacingKeys): NamedStyle => ({ padding: spacing[key] }),
  px: (key: SpacingKeys): NamedStyle => ({ paddingHorizontal: spacing[key] }),
  py: (key: SpacingKeys): NamedStyle => ({ paddingVertical: spacing[key] }),
  pt: (key: SpacingKeys): NamedStyle => ({ paddingTop: spacing[key] }),
  pb: (key: SpacingKeys): NamedStyle => ({ paddingBottom: spacing[key] }),
  pl: (key: SpacingKeys): NamedStyle => ({ paddingLeft: spacing[key] }),
  pr: (key: SpacingKeys): NamedStyle => ({ paddingRight: spacing[key] }),

  m: (key: SpacingKeys): NamedStyle => ({ margin: spacing[key] }),
  mx: (key: SpacingKeys): NamedStyle => ({ marginHorizontal: spacing[key] }),
  my: (key: SpacingKeys): NamedStyle => ({ marginVertical: spacing[key] }),
  mt: (key: SpacingKeys): NamedStyle => ({ marginTop: spacing[key] }),
  mb: (key: SpacingKeys): NamedStyle => ({ marginBottom: spacing[key] }),
  ml: (key: SpacingKeys): NamedStyle => ({ marginLeft: spacing[key] }),
  mr: (key: SpacingKeys): NamedStyle => ({ marginRight: spacing[key] }),
};
