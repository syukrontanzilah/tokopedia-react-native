import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { AutoHobbies, Electronic, Fashion, Groceries, HomeOffice } from '..';
import { IconAkunActive, IconHoby, IconHomeWhite, IconAutomotif, IconGift, IconBox, IconGame } from '../../asset';
import { Gap, SearchAndIcon } from '../../component';
import { colors } from '../../utils/colors';


// const OfficeStore = () => {
//   return (
//     <View style={styles.page}>
//       <SearchAndIcon />
//       <View style={{height:50}}></View>
//     <Icon name="person" size={30}/>
//     <Text>hallo</Text>
//     </View>
//   )
// }

const getTabBarIcon = (props) => {
  const { route } = props
  if (route.key === 'Home') {
    return <IconHomeWhite />
  }
  if (route.key === 'Automotif') {
    return <IconAutomotif />
  }
  if (route.key === "Groceries") {
    return <IconGift />
  }
  if (route.key === "Electronic") {
    return <IconBox />
  }
  if (route.key === "Fashion") {
    return <IconGame />
  }
  return <IconAkunActive />
}


class OfficeStore extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home' },
      { key: 'Automotif', title: 'Automotif' },
      { key: 'Electronic', title: 'Electronic' },
      { key: 'Groceries', title: 'Groceries' },
      { key: 'Fashion', title: 'Fashion' },
    ],
  }
  render() {
    return (
      <View style={styles.page}>
        <SearchAndIcon />
        <Gap height={55} />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            Home: HomeOffice,
            Automotif: AutoHobbies,
            Electronic: Electronic,
            Groceries: Groceries,
            Fashion: Fashion
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ height: 100, width: Dimensions.get('window').width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'green' }}
              renderIcon={
                props => getTabBarIcon(props)
              }
              tabStyle={styles.bubble}
              labelStyle={styles.noLabel}
            />
          }
          tabBarPosition={'top'}
        />
      </View>
    )
  }
}



export default OfficeStore

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.border
  },
  noLabel: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: colors.white
    // display: 'none',
    // height: 0
  },
  bubble: {
    // backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
    // borderRadius: 10
  },
})


