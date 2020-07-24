import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBug, IconCar } from '../../../asset'

const TabItem = () => {
    return (
        <TouchableOpacity style={styles.wraper}>
            <IconCar />
            <Text>home</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
wraper:{
    height:60, width:60
}
})
