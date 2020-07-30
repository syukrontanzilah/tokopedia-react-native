import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Akun, Feed, Home, Keranjang, OfficeStore, Splash, SearchPage, Notifikasi, DetailProduct, MenuAngsuran, MenuKategori, MenuKesehatan, MenuKeuangan, MenuLihatSemua, MenuPulsa, MenuSemuaPromo, MenuTiket, MenuTopup, MenuTravel } from '../pages';
import { TabBar } from './BottomNavigation';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

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
                headerShown: false,
                cardStyleInterpolator: forFade
            }}
        >
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SearchPage" component={SearchPage} />
            <Stack.Screen name="Notifikasi" component={Notifikasi} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />

            <Stack.Screen name="MenuAngsuran" component={MenuAngsuran} />
            <Stack.Screen name="MenuKategori" component={MenuKategori} />
            <Stack.Screen name="MenuKesehatan" component={MenuKesehatan} />
            <Stack.Screen name="MenuKeuangan" component={MenuKeuangan} />
            <Stack.Screen name="MenuLihatSemua" component={MenuLihatSemua} />
            <Stack.Screen name="MenuPulsa" component={MenuPulsa} />
            <Stack.Screen name="MenuSemuaPromo" component={MenuSemuaPromo} />
            <Stack.Screen name="MenuTiket" component={MenuTiket} />
            <Stack.Screen name="MenuTopup" component={MenuTopup} />
            <Stack.Screen name="MenuTravel" component={MenuTravel} />


            



        </Stack.Navigator>
    )
}

export default Router

