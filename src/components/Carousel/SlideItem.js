import { StyleSheet, View, Dimensions, Image } from "react-native";
import React from "react";

const SlideItem = ({ item }) => {
  return (
    <View>
      <Image source={item} style={[styles.image]} resizeMode="contain" />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  image: {
    maxWidth: Dimensions.get("screen").width,
    maxHeight: Dimensions.get("screen").height / 1.25,
  },
});
