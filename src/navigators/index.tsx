export enum Route {
  HomeBottomTab = 'HomeBottomTab',
  SearchBottomTab = 'SearchBottomTab',
  FavoriteBottomTab = 'FavoriteBottomTab',
  ProfileBottomTab = 'ProfileBottomTab',

  HomeScreen = 'HomeScreen',
  MovieDetails = 'MovieDetails',
  SearchScreen = 'SearchScreen',
}

export const BottomTabs = {
  [Route.HomeBottomTab]: {
    icon: 'home',
  },
  [Route.SearchBottomTab]: {
    icon: 'search1',
  },
  [Route.FavoriteBottomTab]: {
    icon: 'staro',
  },
  [Route.ProfileBottomTab]: {
    icon: 'user',
  },
};
