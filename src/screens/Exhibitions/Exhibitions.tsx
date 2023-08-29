import * as React from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
  FlatList,
} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query'
import {ExhibitionsShimmer} from '~components/shimmers';
import {artService} from '~services/artService';
import {colors} from '~utils/colors';
import {
  Container,
  Header,
  Item,
  ItemDescription,
  ItemImagePlaceholder,
  ItemLinkButton,
  ItemTitle,
  LoadingCaption,
  SubHeader,
} from './Exhibitions.styled';
import { NextExhibitionTimer } from '~components/index';

type Props = {};

export const Exhibitions = ({}: Props) => {
  const currentMode: 'light' | 'dark' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  const backgroundStyle = {
    backgroundColor: colors[currentMode].background,
  };

  const {data, fetchNextPage, isFetchingNextPage} = useInfiniteQuery<any>(
    ['artworks', 'collections/exhibitions'],
    ({pageParam = 1}) =>
      artService.fetch('collections/exhibitions', {
        limit: '50',
        page: pageParam,
      }),
    {getNextPageParam: page => page.pagination.current_page + 1},
  );

  const getExhibitionsArray = () => {
    if (!data?.pages.length) {
      return null;
    }
    const result = data.pages.reduce(
      (acc, curr) => [...acc, ...curr.data.map((el: unknown) => el)],
      [],
    );

    return result;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <Header color={colors[currentMode].text}>Chicago Art Museum</Header>
        <SubHeader color={colors[currentMode].text}>
          Available Exhibitions
        </SubHeader>
        <NextExhibitionTimer />
        {getExhibitionsArray() === null ? (
          <ExhibitionsShimmer colorMode={currentMode} />
        ) : (
          <FlatList
            windowSize={2}
            initialNumToRender={4}
            onEndReachedThreshold={80}
            data={getExhibitionsArray()}
            onEndReached={() => fetchNextPage()}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ExhibitionListItem item={item} currentMode={currentMode} />
            )}
          />
        )}
        {isFetchingNextPage ? (
          <LoadingCaption>Loading More Exhibitions...</LoadingCaption>
        ) : null}
      </Container>
    </SafeAreaView>
  );
};

type ListItemProps = {
  item: any;
  currentMode: 'light' | 'dark';
};

const ExhibitionListItem = ({item, currentMode}: ListItemProps) => {
  const onPressLink = () => !!item?.web_url && Linking.openURL(item.web_url);

  return (
    <Item key={item?.id}>
      <ItemTitle color={colors[currentMode].text}>{item?.title}</ItemTitle>
      <ItemDescription color={colors[currentMode].text}>
        {item?.short_description}
      </ItemDescription>
      <ItemImagePlaceholder
        isDark={currentMode === 'dark'}
        source={{uri: item?.image_url}}
      />
      {item?.web_url ? (
        <TouchableOpacity onPress={onPressLink}>
          <ItemLinkButton>See more</ItemLinkButton>
        </TouchableOpacity>
      ) : null}
    </Item>
  );
};
