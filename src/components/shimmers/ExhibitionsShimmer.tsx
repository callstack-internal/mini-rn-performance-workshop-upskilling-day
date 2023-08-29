import * as React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import {colors} from '~utils/colors';

type Props = {
  colorMode: 'dark' | 'light';
};

export const ExhibitionsShimmer = ({colorMode}: Props) => {
  const protoArray = [1, 2, 3];

  return (
    <>
      {protoArray.map(item => (
        <ShimmerContainer key={item}>
          <ShimmerTitle
            shimmerColors={[
              colors[colorMode].shimmer_background,
              colors[colorMode].shimmer_highlight,
              colors[colorMode].shimmer_background,
            ]}
          />
          <ShimmerDescription
            shimmerColors={[
              colors[colorMode].shimmer_background,
              colors[colorMode].shimmer_highlight,
              colors[colorMode].shimmer_background,
            ]}
          />
          <ShimmerImage
            shimmerColors={[
              colors[colorMode].shimmer_background,
              colors[colorMode].shimmer_highlight,
              colors[colorMode].shimmer_background,
            ]}
          />
          <ShimmerLinkButton
            shimmerColors={[
              colors[colorMode].shimmer_background,
              colors[colorMode].shimmer_highlight,
              colors[colorMode].shimmer_background,
            ]}
          />
        </ShimmerContainer>
      ))}
    </>
  );
};

const ShimmerContainer = styled.View`
  margin-bottom: 24px;
`;

const ShimmerBase = styled(ShimmerPlaceholder).attrs({
  LinearGradient: LinearGradient,
})`
  border-radius: 4px;
  margin-bottom: 4px;
`;

const ShimmerTitle = styled(ShimmerBase)`
  width: 160px;
  height: 20px;
`;

const ShimmerDescription = styled(ShimmerBase)`
  width: 100%;
  height: 32px;
`;

const ShimmerImage = styled(ShimmerBase)`
  width: 100%;
  height: 160px;
`;

const ShimmerLinkButton = styled(ShimmerBase)`
  width: 80px;
  height: 20px;
`;
