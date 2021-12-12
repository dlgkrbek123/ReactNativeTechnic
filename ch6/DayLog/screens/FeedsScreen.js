import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrollToBottom = isBottom => {
    if (isBottom !== hidden) setHidden(isBottom);
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrollToBottom={onScrollToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
