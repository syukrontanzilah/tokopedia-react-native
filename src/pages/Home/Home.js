import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselHome, SearchAndIcon } from '../../component'

const Home = () => {
    return (
        <View style={styles.page}>
            <SearchAndIcon />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <CarouselHome />


                <View style={{ height: 1000 }} />


            </ScrollView>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {

    }
})
