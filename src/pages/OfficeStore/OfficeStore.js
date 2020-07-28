import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteOfficeStore } from '..'
import { NavigationContainer } from '@react-navigation/native';
import { SearchAndIcon } from '../../component';


const OfficeStore = () => {
    return (
      <View style={styles.page}>
        <SearchAndIcon/>
      </View>


    )
}

export default OfficeStore

const styles = StyleSheet.create({
  page:{
    flex:1
  }
})
