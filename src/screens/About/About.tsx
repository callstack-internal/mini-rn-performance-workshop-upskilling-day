import * as React from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import {Container, Divider, Header, Paragraph, SubHeader} from './About.styled';

import {colors} from '~utils/colors';

const Excersises = ({currentMode}: {currentMode: 'dark' | 'light'}) => {
  return (
    <>
      <Divider />

      <Paragraph fontWeight="500" color={colors[currentMode].text}>
        Exercise 1: Start with React DevTools
      </Paragraph>
      <Paragraph color={colors[currentMode].text}>
        {
          '- Profile the app using React Dev Tools\n- Apply lazy loading for tabs to the Bottom Tab Navigator\n- Profile the app again using React Dev Tools and compare it previous implementation'
        }
      </Paragraph>

      <Divider />

      <Paragraph fontWeight="500" color={colors[currentMode].text}>
        Exercise 2: Profile app using native solutions
      </Paragraph>
      <Paragraph color={colors[currentMode].text}>
        {'- Profile the app using xCode instrumenst and Android Studio profiler\n- Save results and do same measurements at the end of the workshop '}
      </Paragraph>

      <Divider />

      <Paragraph fontWeight="500" color={colors[currentMode].text}>
        Exercise 3: Improve list performance
      </Paragraph>
      <Paragraph color={colors[currentMode].text}>
        {
          '- Improve performance of lists in the Exhibitions and Artworks screens\n- Use dedicated list component\n- Apply configuration to the list component'
        }
      </Paragraph>

      <Divider />

      <Paragraph fontWeight="500" color={colors[currentMode].text}>
        Exercise 4: Optimize Exhibitions countdown
      </Paragraph>
      <Paragraph color={colors[currentMode].text}>
        {
          '- Diagnose how the countdown component in the Exhibitions screen affects whole screen performance\n- Apply fix to reduce its negative impact\n'
        }
      </Paragraph>

      <Divider />

      <Paragraph fontWeight="500" color={colors[currentMode].text}>
        Exercise 5: Memoization
      </Paragraph>
      <Paragraph color={colors[currentMode].text}>
        {
          '- Observe repeated re-renders with Profiler\n- Apply React.memo, useMemo and useCallback\n- Observer re-renders after changes\n- Measure improvement'
        }
      </Paragraph>

      <Divider />
    </>
  );
};

export const About = () => {
  const currentMode: 'dark' | 'light' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  const backgroundStyle = {
    backgroundColor: colors[currentMode].background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header color={colors[currentMode].text}>Welcome</Header>
          <SubHeader color={colors[currentMode].text}>
            {`(Mini) React Native Performance Workshop`}
          </SubHeader>
          <Paragraph color={colors[currentMode].text}>
            Hello everybody and welcome to our example app, that needs help to
            get back on its feet!
          </Paragraph>
          <Paragraph color={colors[currentMode].text}>
            During our workshops we'll debug this app and fix some of its
            performance issues!
          </Paragraph>
          <Paragraph color={colors[currentMode].text}>
            We'll use this space to mark our milestones and pass on some
            instructions along each step of the way, so please make sure that
            your setup is running, your coffee is hot and you're ready to go.
          </Paragraph>

          <Excersises currentMode={currentMode} />

          <Paragraph fontWeight="500" color={colors[currentMode].text}>
            Happy coding!
          </Paragraph>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};
