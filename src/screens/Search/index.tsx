import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '@component/Search';
import {observer} from 'mobx-react';
import {useMovies} from '@screens/Home/controller';
import {movieSnapShot, movieStoreType} from '@store/Movies';
import {useSearch} from './controller';

import Card from '@component/Card';
import {useStyle} from './styles';

function SearchScreen() {
  const movies: movieSnapShot[] = useMovies();
  const styles = useStyle();
  const [searchValue, setSearchValue] = useState('');
  const [response, setResponse] = useState<movieStoreType[]>([]);

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  useEffect(() => {
    setResponse(useSearch(searchValue, movies));
  }, [searchValue]);

  return (
    <SafeAreaView style={styles.parent}>
      <Search onSearch={onSearch} />
      <View style={{flex: 1}}>
        <View style={styles.searchResultContainer}>
          <FlatList
            numColumns={2}
            data={response}
            key={(item: movieStoreType) => String(item.id)}
            renderItem={({item}) => <Card movie={item} isMovieName={true} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default observer(SearchScreen);
