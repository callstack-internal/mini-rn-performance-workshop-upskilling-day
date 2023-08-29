import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const Header = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({color}) => color};
`;

export const SubHeader = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: ${({color}) => color};
`;

export const TimerCaption = styled(SubHeader)`
  color: #ed9e30;
`;

export const Item = styled.View`
  padding: 4px 16px;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.Text`
  color: #fff;
  padding-bottom: 4px;
  color: ${({color}) => color};
`;

export const ItemDescription = styled.Text`
  color: #fff;
  padding-bottom: 16px;
  color: ${({color}) => color};
`;

export const ItemImagePlaceholder = styled.Image`
  height: 200px;
  width: 100%;
  background-color: ${({isDark}) => (isDark ? '#454545' : '#C5C5C5')};
`;

export const ItemLinkButton = styled.Text`
  color: #3fff89;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const LoadingCaption = styled(SubHeader)`
  color: #f14a4a;
  text-align: center;
`;
