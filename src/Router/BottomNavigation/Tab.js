import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconAkun, IconAkunActive, IconFeed, IconFeedActive, IconHome, IconHomeActive, IconKeranjang, IconKeranjangActive, IconOfficeStore, IconOfficeStoreActive } from '../../asset'
import { colors } from '../../utils'

const Tab = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === "Home") {
            return active ? <IconHomeActive /> : <IconHome />
        }
        if (title === "Feed") {
            return active ? <IconFeedActive /> : <IconFeed />
        }
        if (title === "Office Store") {
            return active ? <IconOfficeStoreActive /> : <IconOfficeStore />
        }
        if (title === "Keranjang") {
            return active ? <IconKeranjangActive /> : <IconKeranjang />
        }
        if (title === "Akun") {
            return active ? <IconAkunActive /> : <IconAkun />
        }
        return <IconHome />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: (active) => ({
        color: active ? colors.active : colors.inactive,
        fontSize: 12,
        marginTop: 4
    })
})
