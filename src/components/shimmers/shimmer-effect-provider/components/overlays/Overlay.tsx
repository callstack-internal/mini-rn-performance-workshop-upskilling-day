import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

export type OverlayProps = {
  color: string;
  styles?: StyleProp<ViewStyle>;
};

export const Overlay = ({color, styles}: OverlayProps) => {
  return <View style={[{backgroundColor: color}, styles]} />;
};
