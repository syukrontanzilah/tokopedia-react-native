import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeOffice = () => {
    return (
        <View style={styles.page}>
            <Text>Home office store</Text>
        </View>
    )
}

export default HomeOffice

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})
