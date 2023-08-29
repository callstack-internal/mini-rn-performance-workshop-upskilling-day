import React from 'react';
import {overlayStyles} from './styles';
import {Overlay, OverlayProps} from './Overlay';

type HighlightOverlayProps = Pick<OverlayProps, 'color'>;

export const HighlightOverlay = ({color}: HighlightOverlayProps) => {
  return <Overlay color={color} styles={overlayStyles.overlay} />;
};
