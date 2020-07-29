import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBell, IconLove, IconPesan, IconSearch } from '../../../asset/icon'
import { colors } from '../../../utils/colors'

const SearchAndIcon = ({onPressSearch}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={onPressSearch}
            style={styles.input}>
                <IconSearch />
                <Text style={styles.textinput}>Cari Samsung Galaxi</Text>
            </TouchableOpacity>
            <View style={styles.wrapIcon}>
                <TouchableOpacity style={styles.icon}>
                    <IconLove />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <IconPesan />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <IconBell />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SearchAndIcon

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        flex: 1,
        paddingHorizontal: 16

    },
    input: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal:10
    },
    textinput: {
        borderRadius: 5,
        paddingVertical: 12, marginLeft: 10,
        fontSize: 15,
        color: colors.gray
    },
    wrapIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        // height:40,

    },
    icon: {
        marginLeft: 15
    }
})
