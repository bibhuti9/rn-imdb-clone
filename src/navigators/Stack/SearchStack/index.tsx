import React from 'react';
import {useTheme} from '@rneui/themed';
import {createStackNavigator} from '@react-navigation/stack';

import {Route} from '../..';
import {screensOptions} from '../../options';

import MovieDetails from '@screens/MovieDetails';
import SearchScreen from '@screens/Search';

const Stack = createStackNavigator();

export default function HomeStack() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        ...screensOptions,
        cardStyle: {backgroundColor: theme.colors.grey3},
      }}>
      <Stack.Screen name={Route.SearchScreen} component={SearchScreen} />
      <Stack.Screen name={Route.MovieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}
