import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselHome, SearchAndIcon, ScanKupon, MainMenu, KhususPenggunaBaru, KejarDiskon, TextHeader, Card1 } from '../../component'
import { ILTas, ILHP, ILSepeda } from '../../asset/ilustration'

const Home = () => {
    return (
        <View style={styles.page}>
            <SearchAndIcon />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <CarouselHome />
                <View style={{ height: 10 }} />

                <ScanKupon />
                <View style={{ height: 15 }} />

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
                    <View style={{ width: 15 }} />
                </ScrollView>
                <View style={{ height: 15 }} />

                <KhususPenggunaBaru />
                <View style={{ height: 15 }} />

                <KejarDiskon />
                <View style={{ height: 15 }} />

                {/* TERLARIS UNTUKMU */}
                <TextHeader title="Terlaris Untukmu" title2="Lihat Semua" />
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollMenu}
                    horizontal>
                    <Card1 image={ILTas} title="Tas Eiger for your Adventure" coret="Rp.500.000" cost="Rp.459.000"/>
                    <Card1 image={ILHP} title="Samsung A50S" coret="Rp.4.500.000" cost="Rp.4380.000"/>
                    <Card1 image={ILSepeda} title="Sepeda Lipat Poligon" coret="Rp.9.800.000" cost="Rp.9.590.000"/>
                    <Card1 image={ILTas} title="Tas Eiger for your Adventure" coret="Rp.500.000" cost="Rp.459.000"/>
                    <Card1 image={ILHP} title="Samsung A50S" coret="Rp.4.500.000" cost="Rp.4380.000"/>
                    <Card1 />
                    <View style={{ width: 20 }} />
                </ScrollView>


                <View style={{ height: 100 }} />


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
    }
})
