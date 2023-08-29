import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {LayoutChangeEvent} from 'react-native';

import {AnimatedGradientOverlay, MaskContainer} from './components';
import {defaultColors} from './styles';
import {
  ShimmerEffectProviderBaseProps,
  ShimmerEffectProviderProps,
  Layout,
} from './typings';

const ShimmerEffectProviderBase = ({
  children,
  backgroundColor,
  duration,
  setFlex,
}: ShimmerEffectProviderBaseProps) => {
  const [layout, setLayout] = React.useState<Layout>();

  const handleSetLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setLayout({width, height});
  };

  if (!layout) {
    return (
      <MaskContainer setLayout={handleSetLayout} setFlex={setFlex}>
        {children}
      </MaskContainer>
    );
  }

  return (
    <ShimmerEffect
      backgroundColor={backgroundColor}
      duration={duration}
      setFlex={setFlex}
      layout={layout}>
      {children}
    </ShimmerEffect>
  );
};

type ShimmerEffectProps = ShimmerEffectProviderBaseProps & {
  layout: Layout;
};

const ShimmerEffect = ({
  layout,
  setFlex,
  children,
  backgroundColor: customBackgroundColor,
}: ShimmerEffectProps) => {
  const backgroundColor = customBackgroundColor ?? defaultColors.lightGray;

  return (
    <MaskedView
      style={{height: layout.height, width: layout.width}}
      maskElement={<MaskContainer setFlex={setFlex}>{children}</MaskContainer>}>
      <AnimatedGradientOverlay backgroundColor={backgroundColor} />
    </MaskedView>
  );
};

export const ShimmerEffectProvider = ({
  animate = true,
  children,
  ...baseProps
}: ShimmerEffectProviderProps) => {
  // eliminate unwanted component return type from children typed as ReactNode
  if (!animate) {
    return <>{children}</>;
  }

  return (
    <ShimmerEffectProviderBase {...baseProps}>
      {children}
    </ShimmerEffectProviderBase>
  );
};
