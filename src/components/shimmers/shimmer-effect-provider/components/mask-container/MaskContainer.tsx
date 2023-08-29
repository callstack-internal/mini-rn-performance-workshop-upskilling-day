import React from 'react';
import {View, StyleSheet} from 'react-native';

import {MaskContainerProps} from './typings';

export const MaskContainer = ({
  children,
  setLayout,
  setFlex = true,
  containerStyle,
}: MaskContainerProps) => {
  if (!setLayout) {
    return <View style={[styles.container, containerStyle]}>{children}</View>;
  }

  return (
    <View
      style={[setFlex && styles.container, containerStyle]}
      onLayout={setLayout}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
