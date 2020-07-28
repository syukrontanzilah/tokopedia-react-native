import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeOffice, AutoHobbies, Electronic, Groceries, Fashion, OfficeStore } from '..';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const RouteOfficeStore = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={OfficeStore} />
                <Tab.Screen name="Auto Hobbies" component={AutoHobbies} />
                <Tab.Screen name="Electronics" component={Electronic} />
                <Tab.Screen name="Groceries" component={Groceries} />
                <Tab.Screen name="Fashion" from component={Fashion} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default RouteOfficeStore

const styles = StyleSheet.create({})
