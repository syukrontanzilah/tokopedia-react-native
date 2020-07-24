import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainKategori, Anak, Buku, Dapur, Elektronik, Game, Hoby, Hp, Kamera, Makanan, Musik, Muslim, Office, Otomotif, Pria, Properti, Sport, Wanita } from '.';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SideTab from './TabKategori/SideTab';


const Stack = createStackNavigator()
// const Tab = createSideTabNavigator();
// // const Tab = createBottomTabNavigator()

// const Main = () => {
//     return (
//             <Tab.Navigator
//             > 

//                 <Tab.Screen name="Main Kategori" component={MainKategori} />
     
//             </Tab.Navigator>

//     )
// }



const RouteKategori = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            tabBar={props => <SideTab {...props} />}

                initialRouteName="MainKategori"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Main Kategori" component={MainKategori} />

                {/* <Stack.Screen name="Main" component={Main} /> */}
                <Stack.Screen name="Anak" component={Anak} />
                <Stack.Screen name="Buku" component={Buku} />
                <Stack.Screen name="Dapur" component={Dapur} />
                <Stack.Screen name="Elektronik" component={Elektronik} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="Hoby" component={Hoby} />
                <Stack.Screen name="Hp" component={Hp} />
                <Stack.Screen name="Kamera" component={Kamera} />
                <Stack.Screen name="Makanan" component={Makanan} />
                <Stack.Screen name="Musik" component={Musik} />
                <Stack.Screen name="Muslim" component={Muslim} />
                <Stack.Screen name="Office" component={Office} />
                <Stack.Screen name="Otomotif" component={Otomotif} />
                <Stack.Screen name="Pria" component={Pria} />
                <Stack.Screen name="Properti" component={Properti} />
                <Stack.Screen name="Sport" component={Sport} />
                <Stack.Screen name="Wanita" component={Wanita} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteKategori

const styles = StyleSheet.create({})
