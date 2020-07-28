import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ILPromo2, ILPromo1, ILListrik, ILKredit, ILBpjs, ILInternet } from '../../../asset/ilustration'
import { colors } from '../../../utils/colors'

const KhususPenggunaBaru = () => {
    return (
        <View style={styles.container}>
            <View style={styles.judul}>
                <Text style={styles.textJudul}>Khusus Pengguna Baru</Text>
                <TouchableOpacity>
                      <Text style={styles.lihat}>Lihat Semua</Text>
                </TouchableOpacity>
              
            </View>
            <View style={styles.content}>
                <View style={styles.grid}>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILPromo2} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILListrik} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILInternet} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.grid}>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILPromo1} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILBpjs} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kotak}>
                        <Image source={ILKredit} style={styles.image} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default KhususPenggunaBaru

const styles = StyleSheet.create({
    container: {

    },
    judul: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        marginBottom: 10,
        alignItems:'center'
    },
    textJudul: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lihat: {
        fontSize: 14,
        color: colors.active,
        fontWeight: 'bold'
    },
    content: {

    },
    grid: {
        flexDirection: 'row'
    },
    kotak: {
        backgroundColor: 'wheat',
        height: 140,
        flex: 1
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover'
    }
})
