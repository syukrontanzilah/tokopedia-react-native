import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const TextHeader = ({title, title2 }) => {
    return (

        <View style={styles.judul}>
            <Text style={styles.textJudul}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.lihat}>{title2}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextHeader

const styles = StyleSheet.create({
    judul: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        marginBottom: 10,
        alignItems: 'center'
    },
    textJudul: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lihat: {
        fontSize: 14,
        color: colors.active,
        fontWeight: 'bold',
    },
})
