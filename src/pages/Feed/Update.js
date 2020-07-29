import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Gap } from '../../component'
import { ILTas, IconStarFull, IconStarHalf, IconHoby, IconCar, IconAkun, IconMobil, IconSelengkapnya, IconLike, IconComment, IconShare, IconPlus } from '../../asset'
import { colors } from '../../utils/colors'

const Update = () => {
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.page}>


                <View style={styles.card}>
                    <View style={styles.wrapContent}>
                        {/* TOP DESC */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <TouchableOpacity>
                                <Image source={ILTas} style={{ height: 35, width: 35, backgroundColor: 'wheat', borderRadius: 35 / 2 }} />
                            </TouchableOpacity>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Q-Tas Bandung</Text>
                                <Text style={{ color: 'gray', fontSize: 10 }}>3 Jam yang lalu</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'seagreen', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 10, marginRight: 20 }}>
                                <Text style={{ color: 'white' }}>Follow</Text>
                            </TouchableOpacity>
                            <View>
                                <IconSelengkapnya />
                            </View>
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Text>Selamat ya buat yang udah dapet promo flash sale semoga barang nya cepat sampai dan awet. tq</Text>
                        </View>

                        {/* GAMBAR PRODUCT STATUS */}
                        <TouchableOpacity style={styles.wrapImage}>
                            <Image source={ILTas} style={styles.image} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 14, color: colors.gray1, paddingVertical: 10 }}>Klik untuk melihat produk</Text>

                        {/* CARD INSIDE */}
                        <View style={styles.cardInside}>
                            <Image source={ILTas} style={{ height: 60, width: 60, borderRadius: 10 }} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text>Tas Boleh punya keren banget cocok untuk adventure</Text>
                                <Text style={{ fontSize: 16, color: 'red' }}>Rp.500.000</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <IconStarFull />
                                    <IconStarFull />
                                    <IconStarFull />
                                    <IconStarFull />
                                    <IconStarHalf />
                                </View>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, alignSelf: 'flex-end', paddingHorizontal: 20 }}>
                                <Text style={{ color: 'white' }}>Beli</Text>
                            </TouchableOpacity>
                        </View>

                        {/* like comment share */}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={styles.icon}>
                                <IconLike />
                                <Text style={styles.textShare}>3</Text>
                            </View>
                            <View style={styles.icon}>
                                <IconComment />
                                <Text style={styles.textShare}>1</Text>
                            </View>
                            <View style={styles.icon}>
                                <IconShare />
                                <Text style={styles.textShare}>Share</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <Gap height={500} />
            </ScrollView>
            <TouchableOpacity
                style={{
                    height: 60, width: 60, backgroundColor: 'seagreen', position: 'absolute', borderRadius: 60 / 2,
                    bottom: 20, right: 20, justifyContent: 'center', alignItems: 'center'
                }}>
                <IconPlus />
            </TouchableOpacity>
        </>
    )
}

export default Update

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 14
    },
    card: {
        // backgroundColor: 'wheat',
        borderRadius: 10,
        borderColor: colors.border,
        borderWidth: 1
        // height:400
    },
    wrapContent: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    wrapImage: {
        height: 370,

    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
        resizeMode: 'cover'

    },
    cardInside: {
        padding: 10,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    icon: {
        flexDirection: 'row',
        marginRight: 15
    },
    textShare: {
        fontSize: 15,
        color: colors.gray,
        marginLeft: 4
    }
})
