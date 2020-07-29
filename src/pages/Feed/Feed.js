import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Explore, Update } from '..';

const initialLayout = { width: Dimensions.get('window').width };

const Feed = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Update' },
    { key: 'second', title: 'Explore' },
  ]);

  const renderScene = SceneMap({
    first: Update,
    second: Explore,
  });

  return (
    <View style={{ flex: 1 }}>
      <TabView
      
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        
      />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
