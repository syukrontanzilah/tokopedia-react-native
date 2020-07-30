import React, { useRef } from "react";
import { Animated, ImageBackground, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";

const images = [
    'https://blog.dothsolutions.com/wp-content/uploads/2018/03/Ecommerce-Trends-banner.jpg',
    'https://www.zehntech.com/wp-content/uploads/2020/04/Enhance-the-Performance-of-Your-Magento-E-commerce-Store-By-Following-the-Latest-Trends-in-Magento-Development.jpg',
    'https://s2.glbimg.com/FQpwzY5g7My-jlOo8za8sl6VRW4=/e.glbimg.com/og/ed/f/original/2015/11/03/ecommerce-comercio-eletronico-black-friday.jpg'
]

const CarouselOfficeStore = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    style={styles.scrollViewStyle}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ])}
                    scrollEventThrottle={1}
                >
                    {images.map((image, imageIndex) => {
                        return (
                            <View
                                style={{ width: windowWidth, height: 220 }}
                                key={imageIndex}
                            >
                                <ImageBackground source={{ uri: image }} style={styles.card}>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>

                <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, { width }]}
                            />
                        );
                    })}
                </View>
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 18, }}>
                <Text style={{ fontSize: 14, color: colors.active, fontWeight: 'bold', marginTop: -12 }}>Lihat semua</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default CarouselOfficeStore;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: 'relative'
    },
    scrollContainer: {
        height: 240,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        // height:undefined,
        // width:undefined,
        // resizeMode:'cover'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: colors.dot,
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignSelf: 'flex-start',
        marginLeft: 14
    }
});


