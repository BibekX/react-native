import React, { useState, useRef } from "react";
import { View, FlatList, Animated } from "react-native";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";

function Slider(props) {
  const imageList = [
    require("../../../assets/poster.jpeg"),
    require("../../../assets/poster.jpeg"),
    require("../../../assets/poster.jpeg"),
    require("../../../assets/poster.jpeg"),
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View>
      <FlatList
        data={imageList}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Pagination data={imageList} scrollX={scrollX} />
    </View>
  );
}

export default Slider;
