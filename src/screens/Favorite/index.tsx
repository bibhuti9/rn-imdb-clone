import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {wishListStoreStoreType} from '@store/Wishlist';
import {store} from '@store/index';

import {useStyle} from '@screens/Search/styles';
import Card from '@component/Card';
import {observer} from 'mobx-react';
import {View} from 'react-native';
import Typography from '@component/typography';

const WishListCard = ({wishList}: {wishList: wishListStoreStoreType}) => {
  const movie = store.movies.get(wishList._id);
  return <Card movie={movie} />;
};

const NoFavorites = () => {
  return <Typography>No Favorites</Typography>;
};

function Favorite() {
  const allWishList: wishListStoreStoreType[] = store.allWishList;
  const styles = useStyle();

  return (
    <SafeAreaView style={styles.parent}>
      <View style={{alignItems: 'center'}}>
        <Typography style={styles.topText}>Your Favorites</Typography>
        <FlatList
          numColumns={2}
          ListEmptyComponent={() => <NoFavorites />}
          data={allWishList}
          key={item => item}
          renderItem={({item}) => <WishListCard wishList={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
export default observer(Favorite);
