import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";

function Pagination({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[{ width: dotWidth, opacity }, styles.dot]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: 100,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 8,
  },
});

export default Pagination;
