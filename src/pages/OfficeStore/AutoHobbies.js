import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'
import { CarouselOfficeStore } from '../../component'

const AutoHobbies = () => {
    return (
        <View style={styles.page}>
            <CarouselOfficeStore/>
        </View>
    )
}

export default AutoHobbies

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})
