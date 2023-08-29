import {ReactNode} from 'react';
import {StyleProp, ViewStyle, LayoutRectangle} from 'react-native';

export interface ShimmerEffectProviderBaseProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  highlightColor?: string;
  duration?: number;
  setFlex?: boolean;
}

export type ShimmerEffectProviderProps = ShimmerEffectProviderBaseProps & {
  animate?: boolean;
};

export type Layout = Pick<LayoutRectangle, 'width' | 'height'>;
