import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CarouselOfficeStore, Gap, TextHeader, KejarDiskon } from '../../component'

const HomeOffice = () => {
    const [Banner] = useState([
        {
            id: 1,
            image: 'https://pmb.palcomtech.com/wp-content/uploads/diskon_thumb.gif'
        },
        {
            id: 2,
            image: 'https://www.jagoanhosting.com/wp-content/uploads/2019/01/Banner-Promo-COM-110.png'
        },
        {
            id: 3,
            image: "https://image.freepik.com/vector-gratis/banner-compras-linea_82574-3393.jpg"
        },
        {
            id: 4,
            image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35490434.jpg"
        },

    ])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.page}>
            <CarouselOfficeStore />
            <Gap height={20} />
            <TextHeader title="Brand Pilihan" title2="Semua Brand" />
            <View style={styles.wrapPilihan}>
                {
                    Banner.map(item => {
                        return <TouchableOpacity
                            key={item.id}
                            style={styles.wrapImagePilihan}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </TouchableOpacity>
                    })
                }
            </View>
            <Gap height={20} />
            <KejarDiskon />
            <Gap height={20} />
        </ScrollView>
    )
}

export default HomeOffice

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    wrapPilihan: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    wrapImagePilihan: {
        height: 120,
        width: '49.5%',
        backgroundColor: 'red',
        marginBottom: 5
    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
        resizeMode: 'cover'
    }
})
