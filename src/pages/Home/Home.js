import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CarouselHome, SearchAndIcon, ScanKupon, MainMenu, KhususPenggunaBaru } from '../../component'

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

                <View style={{ height: 1000 }} />


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
