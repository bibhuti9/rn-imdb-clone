import React from 'react';
import {useTheme} from '@rneui/themed';
import {createStackNavigator} from '@react-navigation/stack';

import {Route} from '../..';
import {screensOptions} from '../../options';

import Home from '@screens/Home';
import MovieDetails from '@screens/MovieDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        ...screensOptions,
        cardStyle: {backgroundColor: theme.colors.grey3},
      }}>
      <Stack.Screen name={Route.HomeScreen} component={Home} />
      <Stack.Screen name={Route.MovieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}
