import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const DetaiProduct = ({route}) => {
    const dataProduct = route.params;
    return (
        <View>
            <Image style={{height:100, width:100}} source={{uri: dataProduct.photo}}/>
            <Text>{dataProduct.title}</Text>
        </View>
    )
}

export default DetaiProduct

const styles = StyleSheet.create({})
