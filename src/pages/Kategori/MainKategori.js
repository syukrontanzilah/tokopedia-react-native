import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconBug, IconCar, IconCoffee, IconFlower, IconHoby, IconLampu, IconMatahari, IconShirt, IconWanita } from '../../asset'

const MainKategori = () => {
    return (
        <View style={{ flex: 1, flexDirection:'row' }}>

            <View style={{width:"20%", backgroundColor:'red' }}>

            </View>

            <View style={{flex:1, backgroundColor:'wheat'}}>

            </View>


            {/* <ScrollView style={{ flex: 1 }}>
                <Text>pilihan kategori</Text>
                <IconCar />
                <IconCoffee />
                <IconFlower style={{ height: 40, width: 40 }} />
                <IconHoby />

                <IconMatahari style={{ height: 100, width: 100 }} />

                <IconWanita style={{ height: 30, width: 30 }} />
                <IconBug style={{ height: 30, width: 30 }} />
                <IconShirt style={{ height: 50, width: 50 }} />
                <View style={{ height: 30, width: 30 }}>
                </View>


            </ScrollView> */}


        </View>
    )
}

export default MainKategori

const styles = StyleSheet.create({})
