import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Gap } from '../../component'
import { ILHP } from '../../asset'


const Explore = ({ navigation, }) => {
    const [product] = useState([
        {
            id: 1,
            image: "https://cf.shopee.co.id/file/9c5ad168e276e760d4d53d40fc525a88"
        },
        {
            id: 2,
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/alisan_alisan-polos-panjang-hitam-kemeja-pria_full18.jpg"
        },
        {
            id: 3,
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//811/alisan_alisan---kemeja-polos-pendek---hitam_full05.jpg"
        },
        {
            id: 4,
            image: "https://s.blanja.com/picspace/138/109706/900.900_15ce0047985447c69221ca9c9a241081.jpg_348x348.jpg"
        },
        {
            id: 5,
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/vm_vm-polos-katun-pendek-slimfit-kemeja-pria---biru-benhur_full10.jpg"
        },
        {
            id: 6,
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-3228767/vm_vm-kemeja-polos-slimfit-pendek-kemeja-pria---biru_full05.jpg"
        },
        {
            id: 7,
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-2678903/vm_vm-slimfit-kemeja-lengan-pendek-pria---biru-toska_full05.jpg"
        },
        {
            id: 8,
            image: "https://id-test-11.slatic.net/p/703cc3f6c857615b158271a14b211977.jpg_720x720q80.jpg_.webp"
        },
        {
            id: 9,
            image: "https://cf.shopee.co.id/file/4a374f02049515a18bf6c3fa6f141aad"
        },
        {
            id: 10,
            image: "https://cf.shopee.co.id/file/e525f5b98188f1a7eb75b631f9c36bb6"
        },
        {
            id: 11,
            image: "https://cdn.shopify.com/s/files/1/0162/2116/articles/Black_jeans_outfits_for_men_2048x2048.jpg?v=1535199078"
        },
        {
            id: 12,
            image: "https://www.dhresource.com/0x0/f2/albu/g9/M01/2F/35/rBVaWF275oeAP2qPAAIkT2G3_Lc339.jpg"
        },
        {
            id: 13,
            image: "https://i.pinimg.com/originals/15/d2/89/15d289db099d26295d57499dfeaea698.jpg"
        },
        {
            id: 14,
            image: "https://www.deccanherald.com/sites/dh/files/article_images/2018/06/11/whitesneakersoutfitideas8.jpg"
        },
        {
            id: 15,
            image: "https://i.pinimg.com/originals/87/e9/69/87e969ea01d1a65c379b0b703de0e649.jpg"
        },
        {
            id: 16,
            image: "https://youraverageguystyle.com/wp-content/uploads/2019/06/Mens-UK-Fashion-Blogger-All-Grey-Summer-Outfit.jpg"
        }
    ])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, }}

        >
            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                {
                    product.map(item => {
                        return <TouchableOpacity
                            key={item.id}
                            style={styles.wrapGrid}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </TouchableOpacity>
                    })
                }
            </View>
            <Gap height={100} />
        </ScrollView>
    )
}

export default Explore

const styles = StyleSheet.create({
    wrapGrid: {
        height: 130,
        backgroundColor: 'wheat',
        width: '33.33%',

    },
    image: {
        height: undefined,
        width: undefined,
        resizeMode: 'cover',
        flex: 1
    }
})
