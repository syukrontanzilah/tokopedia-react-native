import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Gap } from '../../component'

const Explore = () => {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{flex:1}}
        
        >
            <Text>explore</Text>
            <Gap height={100}/>
        </ScrollView>
    )
}

export default Explore

const styles = StyleSheet.create({})
