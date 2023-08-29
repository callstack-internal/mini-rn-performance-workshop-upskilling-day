import {requireNativeComponent, StyleProp, ViewStyle} from 'react-native';

export interface NativeShimmerProps {
  shimmerBackgroundColor?: string;
  shimmerForegroundColor?: string;
  cornerRadius?: number;
  tilt?: number;
  style?: StyleProp<ViewStyle>;
}

export const NativeShimmerView =
  requireNativeComponent<NativeShimmerProps>('NativeShimmerView');
