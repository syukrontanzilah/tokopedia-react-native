import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconMap, IconStarEmpty, IconStarFull, IconStarHalf, ILBebasOngkir, ILHP } from '../../../asset'
import { colors } from '../../../utils/colors'

const Card2 = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapImage}>
                <Image source={ILHP} style={styles.image} />
            </View>

            <View style={styles.wrapText}>
                <Text style={styles.productName}>Nokia terbaru dengan spec yang lebih memikat hati dan sanubari cocok kamu yang sering dilanda kegalauan</Text>
                <Text style={styles.cost}>Rp.789.000</Text>

                <View style={styles.wrapLokasi}>
                    <IconMap />
                    <Text style={styles.city}>Tangerang Selatan</Text>
                </View>
                <View style={styles.wrapLokasi}>
                    <IconStarFull />
                    <IconStarFull />
                    <IconStarFull />
                    <IconStarHalf />
                    <IconStarEmpty />
                    <Text style={styles.rating}>(3.5)</Text>
                </View>
                <Image style={styles.logo} source={ILBebasOngkir} />
            </View>

        </TouchableOpacity>
    )
}

export default Card2

const styles = StyleSheet.create({
    container: {
        // height: 300,
        width: '48%',
        backgroundColor: colors.white,
        // marginHorizontal:10,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0.8,
        borderColor: colors.border
    },
    wrapImage: {
        height: 180,
        width: '100%',
        // backgroundColor: colors.purple
    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    wrapText: {
        padding: 10
    },
    productName: {
        fontSize: 12,
        color: colors.gray1

    },
    cost: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray1,
        paddingVertical: 5
    },
    wrapLokasi: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    city: {
        fontSize: 12,
        color: colors.gray
    },
    rating: {
        fontSize: 12,
        color: colors.gray
    },
    logo: {
        height: 18, width: 65,
        marginTop: 5
    },
})
