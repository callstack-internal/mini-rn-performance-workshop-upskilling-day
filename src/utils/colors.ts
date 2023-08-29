import {ColorValue} from 'react-native';

type colorKeys =
  | 'text'
  | 'background'
  | 'shimmer_background'
  | 'shimmer_highlight'
  | 'link';

export type Colors = {[key in colorKeys]: ColorValue};

const lightTheme: Colors = {
  text: '#151515',
  background: '#ECECEC',
  shimmer_background: '#C0C0C0',
  shimmer_highlight: '#E7E7E7',
  link: 'rgb(52, 61, 255)',
};

const darkTheme: Colors = {
  text: '#ECECEC',
  background: '#151515',
  shimmer_background: '#2E2E2E',
  shimmer_highlight: '#454545',
  link: 'rgb(190, 194, 255)',
};

export const colors = {
  light: lightTheme,
  dark: darkTheme,
} as const;
