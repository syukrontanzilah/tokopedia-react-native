import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Keranjang = () => {
    return (
        <View>
            <Text>keranjang</Text>
            <Icon name="heart"/>
            <Icon name="clock" size={25} />
        </View>
    )
}

export default Keranjang

const styles = StyleSheet.create({})
