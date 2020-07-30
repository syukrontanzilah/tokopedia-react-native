import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselOfficeStore } from '../../component'

const Electronic = () => {
    return (
        <ScrollView style={styles.page}>
            <CarouselOfficeStore/>
        </ScrollView>
    )
}

export default Electronic

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})
