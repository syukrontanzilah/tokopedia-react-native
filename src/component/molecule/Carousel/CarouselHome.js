import React, { useRef } from "react";
import { Animated, ImageBackground, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";

const images = [
  'https://cdn4.vectorstock.com/i/1000x1000/07/78/cartoon-japan-travel-infographic-card-poster-ad-vector-23510778.jpg',
  'https://cdn1.vectorstock.com/i/1000x1000/84/20/online-job-isometric-composition-vector-16098420.jpg',
  'https://cdn2.vectorstock.com/i/1000x1000/32/01/online-job-searching-isometric-flat-concept-vector-6893201.jpg',
  'https://cdn4.vectorstock.com/i/1000x1000/38/63/iindustrial-revolution-40-isometric-flat-vector-21873863.jpg',
  'https://cdn3.vectorstock.com/i/1000x1000/61/17/online-reading-isometric-view-vector-15376117.jpg',
  'https://lh3.googleusercontent.com/proxy/rqttcZKx2ZSf2XOkZMD9NKZTMS1bx2bglG-l1ju5SwXUxFUVdvAioUf7FuValN_99256WasVSoWxw8ZvGPkf17wK3HOqBcU',
  'https://exob2b.com/wp-content/uploads/2018/12/exo-rich-content.jpg',
  'https://cdn1.vectorstock.com/i/1000x1000/64/95/japan-travel-map-in-flat-vector-11926495.jpg',
]

const CarouselHome = () => {
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
                style={{ width: windowWidth, height: 280 }}
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
        <Text style={{ fontSize: 14, color: colors.active, fontWeight: 'bold', marginTop: -12 }}>Lihat semua promo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default CarouselHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  scrollContainer: {
    height: 300,
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


