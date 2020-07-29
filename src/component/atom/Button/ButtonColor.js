import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const ButtonColor = ({ title, bckg }) => {
    return (
        <TouchableOpacity style={styles.container(bckg)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonColor

const styles = StyleSheet.create({
    container: (bckg) => ({
        backgroundColor: bckg,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginRight: 5
    }),
    text: {
        color: colors.white,
        fontSize: 14
    }
})
