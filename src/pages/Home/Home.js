import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselHome, SearchAndIcon, ScanKupon, MainMenu, KhususPenggunaBaru, KejarDiskon, TextHeader, Card1, Gap, ButtonColor, Card2 } from '../../component'
import { ILTas, ILHP, ILSepeda } from '../../asset/ilustration'
import { colors } from '../../utils/colors'

const Home = () => {
    return (
        <View style={styles.page}>
            <SearchAndIcon />
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
                    <MainMenu title="Lihat Semua" />
                    <MainMenu title="Kategori" />
                    <MainMenu title="Top Up & Tagihan" />
                    <MainMenu title="Keuangan" />
                    <MainMenu title="Travel & Entertainment" />
                    <MainMenu title="Pulsa" />
                    <MainMenu title="Angsuran Kredit" />
                    <MainMenu title="Tiket Kereta Api" />
                    <MainMenu title="Semua Promo" />
                    <MainMenu title="Kesehatan" />
                    <Gap width={15} />
                </ScrollView>
                <Gap height={15} />
                <KhususPenggunaBaru />
                <Gap height={15} />
                <KejarDiskon />
                <Gap height={15} />
                {/* TERLARIS UNTUKMU */}
                <TextHeader title="Terlaris Untukmu" title2="Lihat Semua" />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollMenu}
                    horizontal>
                    <Card1 image={ILTas} title="Tas Eiger for your Adventure" coret="Rp.500.000" cost="Rp.459.000" />
                    <Card1 image={ILHP} title="Samsung A50S" coret="Rp.4.500.000" cost="Rp.4380.000" />
                    <Card1 image={ILSepeda} title="Sepeda Lipat Poligon" coret="Rp.9.800.000" cost="Rp.9.590.000" />
                    <Card1 image={ILTas} title="Tas Eiger for your Adventure" coret="Rp.500.000" cost="Rp.459.000" />
                    <Card1 image={ILHP} title="Samsung A50S" coret="Rp.4.500.000" cost="Rp.4380.000" />
                    <Card1 />
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
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
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
        justifyContent:'space-between'
    }
})
