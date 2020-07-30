import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILSplash } from '../../asset'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 1000)
    }, [])
    return (
        <ImageBackground
            source={ILSplash}
            style={styles.imagebckg}>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    imagebckg: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})
