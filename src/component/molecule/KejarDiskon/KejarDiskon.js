import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import { colors } from '../../../utils/colors'
import { ILBanner, ILHP, ILBebasOngkir, ILTas, ILSepeda } from '../../../asset/ilustration'

const KejarDiskon = () => {
    return (
        <View style={styles.container}>
            <View style={styles.judul}>
                <View>
                    <Text style={styles.textJudul}>Kejar Diskon Spesial</Text>
                    <View style={styles.wrapCount}>
                        <Text style={styles.dimulai}>Dimulai dalam</Text>
                        <View style={styles.wrapAngka}>
                            <Text style={styles.angka}>03</Text>
                        </View>
                        <Text style={styles.titikDua}>:</Text>
                        <View style={styles.wrapAngka}>
                            <Text style={styles.angka}>51</Text>
                        </View>
                        <Text style={styles.titikDua}>:</Text>
                        <View style={styles.wrapAngka}>
                            <Text style={styles.angka}>55</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity>
                    <Text style={styles.lihat}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground
                source={ILBanner}
                style={styles.content}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={styles.scroll}>


                    <TouchableOpacity style={styles.card}>
                        <View style={styles.imageWrap}>
                            <Image source={ILHP} style={styles.image} />
                        </View>
                        <View style={styles.wrapHarga}>
                            <Text style={styles.angkaCoret}>Rp. 8.500.000</Text>
                            <Text style={styles.harga}>Rp. 7.999.900</Text>
                            <Image source={ILBebasOngkir} style={styles.logo} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.imageWrap}>
                            <Image source={ILTas} style={styles.image} />
                        </View>
                        <View style={styles.wrapHarga}>
                            <Text style={styles.angkaCoret}>Rp. 429.000</Text>
                            <Text style={styles.harga}>Rp. 350.900</Text>
                            <Image source={ILBebasOngkir} style={styles.logo} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.imageWrap}>
                            <Image source={ILSepeda} style={styles.image} />
                        </View>
                        <View style={styles.wrapHarga}>
                            <Text style={styles.angkaCoret}>Rp. 9.829.000</Text>
                            <Text style={styles.harga}>Rp. 9.350.900</Text>
                            <Image source={ILBebasOngkir} style={styles.logo} />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.card}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                    </TouchableOpacity>

                    <View style={{ width: 135 }} />

                </ScrollView>
            </ImageBackground>



        </View>
    )
}

export default KejarDiskon

const styles = StyleSheet.create({
    container: {

    },
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
    wrapCount: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dimulai: {
        fontSize: 12,
        color: colors.gray,
        marginRight: 5

    },
    wrapAngka: {
        height: 25,
        width: 25,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    angka: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15
    },
    titikDua: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 2

    },
    lihat: {
        fontSize: 14,
        color: colors.active,
        fontWeight: 'bold',
    },
    content: {
        backgroundColor: 'wheat',
        // height: 250,

    },
    scroll: {
        paddingVertical: 15,
        paddingLeft: 130
    },
    card: {
        height: 210,
        width: 130,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginRight: 10
    },
    imageWrap: {
        width: 130,
        height: 120,
    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    wrapHarga: {
        marginLeft: 10
    },
    angkaCoret: {
        textDecorationLine: 'line-through',
        color: colors.gray,
        marginTop:5
    },
    harga: {
        fontSize: 16,
        marginBottom: 5
    },
    logo: {
        height: 32, width: 42
    }
})
