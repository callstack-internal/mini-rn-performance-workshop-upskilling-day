import {LayoutChangeEvent} from 'react-native';

import {ShimmerEffectProviderProps} from '../../typings';

export type MaskContainerProps = Pick<
  ShimmerEffectProviderProps,
  'children' | 'containerStyle' | 'setFlex'
> & {
  setLayout?: (layout: LayoutChangeEvent) => void;
};
