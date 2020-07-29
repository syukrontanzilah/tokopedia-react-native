import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const TransaksiNotif = () => {
    return (
        <ScrollView style={styles.page}>
            <Text>Transaksi</Text>
        </ScrollView>
    )
}

export default TransaksiNotif

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
