import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'
import { ILHP, ILTas, ILBebasOngkir } from '../../../asset/ilustration'

const Card1 = ({title, coret, cost, image}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapImage}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.wraptext}>
                <Text style={styles.desc}>{title}</Text>


                <View style={styles.wrapDesc}>
                    <Text style={styles.sale}>52% OFF</Text>
                    <Text style={styles.coret}>{coret}</Text>
                </View>
                <Text style={styles.cost}>{cost}</Text>
                <Image style={styles.logo} source={ILBebasOngkir} />
            </View>


        </TouchableOpacity>
    )
}

export default Card1

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 130,
        backgroundColor: colors.white,
        marginRight: 8,
        borderRadius: 10,
        borderColor: colors.border,
        borderWidth: 0.5
    },
    wrapImage: {
        height: 125,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10

    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    desc: {
        fontSize: 14,
        color: colors.gray2
    },
    cost: {
        fontSize: 16,
        color: colors.gray2,
        fontWeight: 'bold',
        marginTop: 5
    },
    wraptext: {
        padding: 5
    },
    wrapDesc: {
        flexDirection: 'row',
        alignItems:'center'   
    },
    sale: {
        color: 'red',
        fontSize: 10,
        backgroundColor: 'pink',
        marginRight: 5,
        padding: 4, borderRadius: 5
    },
    coret: {
        textDecorationLine: 'line-through',
        color: colors.dot,
        fontSize:12
    },
    logo: {
        height: 18, width: 65,
        marginTop: 5
    },

})
