import React, { useRef } from "react";
import { Animated, ImageBackground, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";

const images = [
  'https://jatengpos.co.id/wp-content/uploads/2020/05/3-2.jpg',
  "https://i.pinimg.com/originals/24/9b/7c/249b7cd9e7cae39f53ce5f2f04fa8eaa.jpg",
  'https://pbs.twimg.com/media/EGmcMg0U8AEjTrG.jpg:large',
  'https://cdn2.tstatic.net/jogja/foto/bank/images/tokopedia-ramadan-ekstra_20180510_185652.jpg',
  'https://ghozaliq.com/wp-content/uploads/2018/05/Tokopedia-3.jpg',
  'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/08/Blog_Cara-Daftar-untuk-Membuat-Akun-Tokopedia-dengan-Mudah.jpg',
  'https://ecs7.tokopedia.net/img/blog/seller/2018/07/SellerCenter11.jpg',
  'https://pbs.twimg.com/media/De7vgm-U8AE1Wq2.jpg',
  'https://jatengpos.co.id/wp-content/uploads/2020/05/3-2.jpg',
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

      <TouchableOpacity style={{alignSelf:'flex-end', marginRight:15,}}>
        <Text style={{fontSize:13, color:colors.active, fontWeight:'bold', marginTop:-12}}>Lihat semua promo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default CarouselHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative'
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
    marginLeft: 5
  }
});


