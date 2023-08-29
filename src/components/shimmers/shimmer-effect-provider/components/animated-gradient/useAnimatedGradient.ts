import {useEffect} from 'react';
import {LayoutRectangle} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {shared} from '../../useSharedValue';

export const useAnimatedGradient = (
  duration: number,
  layout?: LayoutRectangle,
) => {
  const sharedLocal = useSharedValue(0);

  useEffect(() => {
    sharedLocal.value = withRepeat(withTiming(1, {duration}), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          sharedLocal.value,
          [0, 1],
          [-(layout?.width ?? 0), layout?.width ?? 0],
        ),
      },
    ],
  }));
};

export const useAnimatedGradientAlt = (width: number) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(shared.value, [0, 1], [-width, width]),
      },
    ],
  }));
};
