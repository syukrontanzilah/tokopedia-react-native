import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Akun, Feed, Home, Keranjang, OfficeStore, Splash, SearchPage, Notifikasi } from '../pages';
import { TabBar } from './BottomNavigation';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Office Store" component={OfficeStore} />
            <Tab.Screen name="Keranjang" component={Keranjang} />
            <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
        initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SearchPage" component={SearchPage} />
            <Stack.Screen name="Notifikasi" component={Notifikasi} />


        </Stack.Navigator>
    )
}

export default Router

