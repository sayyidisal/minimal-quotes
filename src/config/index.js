import { Platform } from 'react-native';

export const colors = {
  light: '#FFFFFF',
  dark: '#000000',
  gray: '#96979F',
  lightGray: '#F4F6F8',
  darkGray: '#323643',
};

export const fonts = {
  primaryRegular: Platform.select({
    iOS: 'System',
    android: 'SF-Pro-Text-Regular',
  }),
  primaryLight: Platform.select({
    iOS: 'System',
    android: 'SF-Pro-Text-Light',
  }),
};

export default {
  defaultAnimationDuration: 400,
};
