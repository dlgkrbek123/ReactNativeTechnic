import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrollToBottom}) => {
  const onScroll = e => {
    if (!onScrollToBottom) return;

    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    onScrollToBottom(
      contentSize.height > layoutMeasurement.height && distanceFromBottom < 72,
    );
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  bloc: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: 1,
  },
});

export default FeedList;
