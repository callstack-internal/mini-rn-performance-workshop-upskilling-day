import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Overlay, OverlayProps} from './Overlay';

type BackgroundOverlayProps = Pick<OverlayProps, 'color'> & {
  style?: ViewStyle;
};

export const BackgroundOverlay = ({color, style}: BackgroundOverlayProps) => {
  return <Overlay color={color} styles={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
