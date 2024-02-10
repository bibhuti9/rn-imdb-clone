import React from 'react';
import {useTheme} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useStyle} from './styles';
import {BottomTabs, Route} from '..';
import HomeStack from '../Stack/HomeStack';

import {push} from '@utils/navigation';
import Favorite from '@screens/Favorite';
import SearchScreen from '@screens/Search';
import ProfileScreen from '@screens/Profile';

const BottomStack = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const inset = useSafeAreaInsets();
  const styles = useStyle(inset);
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              push({
                screenName: route.name,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              style={styles.button}
              onPress={onPress}
              key={String(index)}
              onLongPress={onLongPress}>
              <Icon
                name={BottomTabs[label].icon}
                color={isFocused ? theme.colors.primary : theme.colors.grey1}
                size={30}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function BottomNavigators() {
  return (
    <BottomStack.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <BottomStack.Screen name={Route.HomeBottomTab} component={HomeStack} />
      <BottomStack.Screen
        name={Route.SearchBottomTab}
        component={SearchScreen}
      />
      <BottomStack.Screen name={Route.FavoriteBottomTab} component={Favorite} />
      <BottomStack.Screen
        name={Route.ProfileBottomTab}
        component={ProfileScreen}
      />
    </BottomStack.Navigator>
  );
}
