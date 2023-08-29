import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, useColorScheme} from 'react-native';
import {colors} from '~utils/colors';
import {About, Artworks, Exhibitions} from '~screens';

const Tab = createBottomTabNavigator();

const Noop = () => null;

export const BottomTabNavigator = () => {
  const currentMode: 'dark' | 'light' = useColorScheme() || 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Exhibitions"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors[currentMode].background,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors[currentMode].text,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colors[currentMode].background,
        },
        tabBarIcon: Noop,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        lazy: false,
      })}>
      <Tab.Screen name="Exhibitions" component={Exhibitions} />
      <Tab.Screen name="Artworks" component={Artworks} />
      <Tab.Screen
        name="About"
        component={About}
        options={() => ({header: Noop})}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  tabBarItem: {height: 32},
});
