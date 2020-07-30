import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselHome, SearchAndIcon, ScanKupon, MainMenu, KhususPenggunaBaru, KejarDiskon, TextHeader, Card1, Gap, ButtonColor, Card2 } from '../../component'
import { ILTas, ILHP, ILSepeda } from '../../asset/ilustration'
import { colors } from '../../utils/colors'
import Fire from '../../config/Fire'

const Home = ({ navigation, }) => {
    const [product, setProduct] = useState([])
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
        <View style={styles.page}>
            <SearchAndIcon
                onPressSearch={() => navigation.navigate('SearchPage')}
                onPressNotifikasi={() => navigation.navigate('Notifikasi')} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <CarouselHome />
                <Gap height={10} />
                <ScanKupon />
                <Gap height={15} />
                {/* MAIN MENU */}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollMenu}
                    horizontal>
                    <MainMenu title="Lihat Semua" onPress={()=> navigation.navigate('MenuLihatSemua')} />
                    <MainMenu title="Kategori" onPress={()=> navigation.navigate('MenuKategori')} />
                    <MainMenu title="Top Up & Tagihan" onPress={()=> navigation.navigate('MenuTopup')} />
                    <MainMenu title="Keuangan" onPress={()=> navigation.navigate('MenuKeuangan')} />
                    <MainMenu title="Travel & Entertainment" onPress={()=> navigation.navigate('MenuTravel')} />
                    <MainMenu title="Pulsa" onPress={()=> navigation.navigate('MenuPulsa')} />
                    <MainMenu title="Angsuran Kredit" onPress={()=> navigation.navigate('MenuAngsuran')} />
                    <MainMenu title="Tiket Kereta Api" onPress={()=> navigation.navigate('MenuTiket')} />
                    <MainMenu title="Semua Promo" onPress={()=> navigation.navigate('MenuSemuaPromo')} />
                    <MainMenu title="Kesehatan" onPress={()=> navigation.navigate('MenuKesehatan')} />
                    <Gap width={15} />
                </ScrollView>
                <Gap height={15} />
                <KhususPenggunaBaru />
                <Gap height={15} />
                <KejarDiskon
                // onPress={()=>navigation.navigate('DetailProduct')}
                />
                <Gap height={15} />
                {/* TERLARIS UNTUKMU */}
                <TextHeader title="Terlaris Untukmu" title2="Lihat Semua" />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollMenu}
                    horizontal>
                    {
                        product.map(terlaris => {
                            return <Card1 
                            key={terlaris.id}
                            title={terlaris.title}
                            cost={terlaris.price}
                            image={{uri: terlaris.photo}}
                            coret={terlaris.coret}
                            onPress={()=> navigation.navigate('DetailProduct', terlaris)}
                            />
                        })
                    }
                    <Gap width={25} />
                </ScrollView>
                <Gap height={15} />
                {/* Pilihan button */}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollMenu}
                    horizontal>
                    <ButtonColor bckg="purple" title="For You" />
                    <ButtonColor bckg="salmon" title="Special Discount" />
                    <ButtonColor bckg="violet" title="Aktivitasmu" />
                    <ButtonColor bckg="chocolate" title="Buku Cerita Anak" />
                    <ButtonColor bckg="orange" title="Sepeda Gunung" />
                    <Gap width={25} />
                </ScrollView>
                <Gap height={15} />

                {/* PRODUCT */}
                <View style={styles.product}>
                    {
                        product.map(item => {
                            return <Card2
                                key={item.id}
                                title={item.title}
                                city={item.city}
                                photo={{ uri: item.photo }}
                                price={item.price}
                                onPress={()=> navigation.navigate('DetailProduct', item)}
                            />
                        })
                    }
                </View>


                <Gap height={10} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {

    },
    scrollMenu: {
        paddingHorizontal: 14
    },
    product: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 14,
        justifyContent: 'space-between'
    }
})
