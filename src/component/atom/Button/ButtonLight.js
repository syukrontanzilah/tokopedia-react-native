import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const ButtonLight = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>button light</Text>
        </TouchableOpacity>
    )
}

export default ButtonLight

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white, padding: 8,
        borderRadius: 15,
        borderColor: colors.active,
        borderWidth: 1,
        marginRight: 5,
        marginVertical: 4
    },
    text: {
        color: colors.active,
        fontSize: 15
    }
})
