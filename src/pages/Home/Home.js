import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CarouselHome } from '../../component'

const Home = () => {
    return (
        <View style={styles.page}>
            <CarouselHome/>
            {/* <Text>homeiii</Text> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
