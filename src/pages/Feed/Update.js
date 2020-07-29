import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Gap } from '../../component'

const Update = () => {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{flex:1,}}>
            <Text>update</Text>
            <Gap height={1000}/>
        </ScrollView>
    )
}

export default Update

const styles = StyleSheet.create({})
