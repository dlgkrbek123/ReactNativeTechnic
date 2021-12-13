import React, {useContext} from 'react';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';
import {View, StyleSheet} from 'react-native';
import FeedList from '../components/FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

const SearchScreen = () => {
  const {logs} = useContext(LogContext);
  const {keyword} = useContext(SearchContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );

  if (keyword === '') return <EmptySearchResult type="EMPTY_KEYWORD" />;
  if (filtered.length === 0) return <EmptySearchResult type="NOT_FOUND" />;

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default SearchScreen;
