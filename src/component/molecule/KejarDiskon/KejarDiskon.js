import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconNext } from '../../../asset/icon'
import { ILBanner, ILBebasOngkir } from '../../../asset/ilustration'
import Fire from '../../../config/Fire'
import { colors } from '../../../utils/colors'

const KejarDiskon = ({onPress, item, navigation}) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        Fire.database()
            .ref('product')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setProduct(res.val())
                }
            }).catch(err => { })
    }, [])
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
                    {
                        product.map(item => {
                            return (
                                <TouchableOpacity
                                onPress={onPress}
                                style={styles.card}>
                                    <View style={styles.imageWrap}>
                                        <Image source={{ uri: item.photo }} style={styles.image} />
                                    </View>
                                    <View style={styles.wrapHarga}>
                                        <Text style={styles.angkaCoret}>{item.coret}</Text>
                                        <Text style={styles.harga}>{item.price}</Text>
                                        <Image source={ILBebasOngkir} style={styles.logo} />
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }

                    <TouchableOpacity style={styles.cardLast}>
                        <IconNext />
                        <Text style={styles.lihat}>Lihat Produk Lainnya</Text>
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
        marginTop: 5
    },
    harga: {
        fontSize: 16,
        marginBottom: 5
    },
    logo: {
        height: 18, width: 65
    },
    cardLast: {
        height: 210,
        width: 130,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
