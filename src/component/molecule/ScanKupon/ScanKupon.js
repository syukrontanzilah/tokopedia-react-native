import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../../utils/colors'
import { IconQR, IconLove, IconKupon } from '../../../asset/icon'
import { ILOVO } from '../../../asset/ilustration'

const ScanKupon = () => {
    return (
        <View style={styles.container}>
            {/* BARCODE */}
            <TouchableOpacity style={styles.barcode}>
                <View style={styles.wrapQR}>
                    <IconQR />
                    <Text style={styles.textQR}>Scan</Text>
                </View>
            </TouchableOpacity>
            {/* OVO */}
            <TouchableOpacity style={styles.grid}>
                <View style={styles.wrapImage}>
                    <Image source={ILOVO} style={styles.ovo} />
                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.saldo}>Rp.127.754</Text>
                    <Text style={styles.point}>Points 2.645</Text>
                </View>
            </TouchableOpacity>
            {/* KUPON */}
            <TouchableOpacity style={styles.grid}>
                <View style={styles.wrapImage}>
                    <IconKupon/>
                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.saldo}>Member Klasik</Text>
                    <Text style={styles.point}>8 Kupon</Text>
                </View>
            </TouchableOpacity>
         
        </View>
    )
}

export default ScanKupon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 16
    },
    grid: {
        // backgroundColor: 'wheat',
        borderLeftColor: colors.border,
        borderLeftWidth: 1,
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 7
    },
    wrapQR: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    textQR: {
        color: colors.dot,
        fontSize: 10
    },
    wrapText: {

    },
    wrapImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:8
    },
    ovo: {
        height: 22, width: 22, borderRadius: 30 / 2
    },
    saldo: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    point: {
        fontSize: 12,
        color: colors.dot
    }
})
