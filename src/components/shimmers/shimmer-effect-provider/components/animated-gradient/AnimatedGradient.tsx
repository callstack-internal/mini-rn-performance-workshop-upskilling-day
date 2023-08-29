import React from 'react';

import {BackgroundOverlay, overlayStyles} from '../overlays';
import Shimmer from 'react-native-shimmer';

type Props = {
  backgroundColor: string;
};

export const AnimatedGradientOverlay = ({backgroundColor}: Props) => (
  <Shimmer animating>
    <BackgroundOverlay style={overlayStyles.overlay} color={backgroundColor} />
  </Shimmer>
);
