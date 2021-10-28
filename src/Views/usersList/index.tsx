import React, {useEffect, useState,useMemo} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux';
import {fetchUserData} from '../../redux/reducers';
import User from './User';
import styles from './styles';

export interface dataModel {
  item: {
    login: {sha256: string};
    name: {
      first: string;
      last: string;
    };
    picture: {large: string; medium: string; thumbnail: string};
  };
}

const UsersList = () => {
  const dispatch = useDispatch();

  const {
    userData: {data},
  } = useSelector((state: RootState) => state.usersList);

  const [state, setstate] = useState({
    page: 1,
    refresh: false,
  });

  const {page, refresh} = state;

  const onRefresh = () => {
    setstate({...state, refresh: true});
    dispatch(fetchUserData(page));
    setstate({...state, refresh: false});
  };

  const fetchData = () => {
    dispatch(fetchUserData(page));
  };

  const loadMore = () => {
    setstate({...state, page: page + 1});
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const renderItem = ({item}: dataModel) => <User item={item} />;

  const renderSeperator = () => <View style={styles.divider} />;

  const memoizedValue = useMemo(() => renderItem, [data]);


  return (
        <FlatList
          keyExtractor={item => item?.login?.sha256}
          data={data}
          renderItem={memoizedValue}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          ItemSeparatorComponent={renderSeperator}
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text>No Data</Text>}
          onEndReached={loadMore}
          onEndReachedThreshold={15}
        />
  );
};

export default UsersList;
