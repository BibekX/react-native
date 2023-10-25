import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

function NewsDetail({ route }) {
  console.log("route.params", route.params.title);
  return (
    <View>
      <Image
        source={require("../../../assets/image1.png")}
        style={styles.img}
      />
      <Text>{route.params.title}</Text>
    </View>
  );
}

export default NewsDetail;

const styles = StyleSheet.create({
  img: { maxHeight: Dimensions.get("screen").height / 2 },
});
