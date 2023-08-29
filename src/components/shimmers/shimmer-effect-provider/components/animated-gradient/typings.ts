import {StyleProp, ViewStyle} from 'react-native';
import Reanimated from 'react-native-reanimated';

export type AnimatedStyle = StyleProp<
  Reanimated.AnimateStyle<StyleProp<ViewStyle>>
>;

export interface AnimatedGradientOverlayProps {
  highlightColor: string;
  animationStyles: AnimatedStyle;
}
