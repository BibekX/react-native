import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

function CouponScreen() {
  const [currentCoupon, setCurrentCoupon] = useState("available");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Available" },
    { key: "second", title: "Used" },
    { key: "third", title: "Expired" },
  ]);

  const [coupons, setCoupon] = useState({
    available: [
      {
        id: 1,
        img: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        name: "Free Burger Coupon 1",
        description: "Free Burger Coupon 123",
      },
      {
        id: 10,
        img: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        name: "Free Soup Coupon 10",
        description: "Free Soup Coupon 123",
      },
    ],
    used: [
      {
        id: 2,
        img: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        name: "Free Burger Coupon 2",
        description: "Free Burger Coupon 123",
      },
    ],
    expired: [
      {
        id: 3,
        img: "https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        name: "Free Burger Coupon 3",
        description: "Free Burger Coupon 123",
      },
    ],
  });

  // function
  const changeCouponType = (index) => {
    let couponType =
      index === 0 ? "available" : index === 1 ? "used" : "expired";
    setCurrentCoupon(couponType);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.couponCard}>
        <Image
          source={{
            uri: item.img,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardDetail}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const CouponTab = (type) => (
    <FlatList
      data={coupons[type]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: () => CouponTab("available"),
          second: () => CouponTab("used"),
          third: () => CouponTab("expired"),
        })}
        onIndexChange={(index) => {
          changeCouponType(index);
          setIndex(index);
        }}
        initialLayout={{ width: Dimensions.get("screen").width }}
      />
    </View>
  );
}

export default CouponScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  couponCard: {
    flexDirection: "row",
    height: 200,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#BC3752",
  },
  cardImage: { width: 150, marginRight: 10 },
  cardDetail: {
    justifyContent: "space-around",
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  cardDescription: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  scene: {
    flex: 1,
  },
  tabStyle: {
    width: "auto",
  },
  labelStyle: {
    fontWeight: "bold",
  },
});
