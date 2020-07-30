import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Groceries = () => {
    return (
        <View style={styles.page}>
            <Text>Groceries</Text>
        </View>
    )
}

export default Groceries

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})
