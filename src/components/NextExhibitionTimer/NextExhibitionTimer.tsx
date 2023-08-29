import * as React from 'react';
import styled from 'styled-components/native';

const nextExhibitionDate = new Date(2023, 12, 25, 15, 35);

const formatTimeLeft = () => {
  const now = new Date();
  const dateDiff = nextExhibitionDate.getTime() - now.getTime();
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}min ${seconds}sec`;
};

export const NextExhibitionTimer = () => {
  const [timerLabel, setTimerLabel] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  React.useEffect(() => {
    timer.current = setInterval(() => setTimerLabel(formatTimeLeft()), 5000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [formatTimeLeft]);

  return timerLabel ? (
    <TimerCaption>{`Time until our next exhibition: \n${timerLabel}`}</TimerCaption>
  ) : null;
};

export const TimerCaption = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: #ed9e30;
`;
