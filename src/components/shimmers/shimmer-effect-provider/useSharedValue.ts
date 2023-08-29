import {useEffect} from 'react';

import {
  useSharedValue,
  withRepeat,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export let shared: SharedValue<number>;

export const usePredefinedSharedValue = (duration = 800) => {
  const sharedLocal = useSharedValue(0);

  useEffect(() => {
    shared = sharedLocal;
    shared.value = withRepeat(withTiming(1, {duration}), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
