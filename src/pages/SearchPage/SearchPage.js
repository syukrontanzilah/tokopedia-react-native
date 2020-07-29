import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { IconVoice, IconSearch, IconBackTo } from '../../asset'
import { colors } from '../../utils/colors'
import { ButtonLight, Gap } from '../../component'

const SearchPage = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapNavigasiInput}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.icon}>
                    <IconBackTo />
                </TouchableOpacity>

                <View style={styles.wrapInput}>
                    <IconSearch style={styles.search} />
                    <TextInput
                        style={styles.input}
                        placeholder="macbook pro" />
                </View>
                <TouchableOpacity style={styles.icon}>
                    <IconVoice />
                </TouchableOpacity>
            </View>
            <Gap height={100} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 15 }}>
                <Text>Pencarian populer</Text>
                <Text>Refresh</Text>
            </View>



            <View style={styles.random}>
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />
                <ButtonLight />

            </View>


        </View>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 10
    },
    wrapNavigasiInput: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    wrapInput: {
        flex: 1
    },
    search: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        left: 10
    },
    input: {
        fontSize: 16,
        backgroundColor: colors.border,
        borderRadius: 10,
        paddingVertical: 5,
        paddingLeft: 30
    },
    icon: {
        paddingHorizontal: 5
    },
    random: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5
    }
})
