import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBug, IconMatahari, IconLight, IconKategori, IconTravel, IconPulsa, IconKeuangan, IconLihatSemua, IconRecycle, IconSemuaPromo, IconMobil, IconKesehatan } from '../../../asset/icon'
import { colors } from '../../../utils/colors'

const MainMenu = ({ title }) => {
    const Icon = () => {
        if (title === "Kategori") {
            return <IconKategori style={styles.iconSpec} />
        }
        if (title === "Top Up & Tagihan") {
            return <IconLight style={styles.iconSpec} />
        }
        if (title === "Travel & Entertainment") {
            return <IconTravel style={styles.iconSpec} />
        }
        if (title === "Pulsa") {
            return <IconPulsa style={styles.iconSpec} />
        }
        if (title === "Keuangan") {
            return <IconKeuangan style={styles.iconSpec} />
        }
        if (title === "Lihat Semua") {
            return <IconSemuaPromo style={styles.iconSpec} />
        }
        if (title === "Semua Promo") {
            return <IconMatahari style={styles.iconSpec} />
        }
        if (title === "Angsuran Kredit") {
            return <IconRecycle style={styles.iconSpec} />
        }
        if (title === "Tiket Kereta Api") {
            return <IconMobil style={styles.iconSpec} />
        }
        if (title === "Kesehatan") {
            return <IconKesehatan style={styles.iconSpec} />
        }

        return <IconMatahari style={styles.iconSpec} />
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon />
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'wheat',
        marginRight: 12,

    },
    content: {
        width: 60,
        alignItems: 'center',
        // backgroundColor:'silver'
    },
    icon: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bckgMenu,
        borderRadius: 10
    },
    iconSpec: {
        height: 30,
        width: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 11,
        marginTop: 4,
        color: colors.gray1
    }
})
