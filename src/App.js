import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RouteKategori from './pages/Kategori/RouteKategori'
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})
