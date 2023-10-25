import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { TabView, SceneMap } from "react-native-tab-view";
import { getDistance } from "geolib";

function ShopLocatorScreen() {
  // useState
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [currentArea, setCurrentArea] = useState("hkIsland");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "HK & Islands" },
    { key: "second", title: "Kowloon" },
    { key: "third", title: "New Territories" },
  ]);

  const [shopLocations, setShopLocations] = useState({
    hkIsland: [
      {
        id: "1",
        name: "Shop 1",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.252111,
        longitude: 114.177136,
        distance: null,
      },
      {
        id: "2",
        name: "Shop 2",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.252491,
        longitude: 114.177546,
        distance: null,
      },
      {
        id: "3",
        name: "Shop 3",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.252831,
        longitude: 114.177956,
        distance: null,
      },
    ],
    kowloon: [
      {
        id: "4",
        name: "Shop 4",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.311111,
        longitude: 114.177136,
        distance: null,
      },
      {
        id: "5",
        name: "Shop 5",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.315491,
        longitude: 114.177546,
        distance: null,
      },
      {
        id: "6",
        name: "Shop 6",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.319831,
        longitude: 114.177956,
        distance: null,
      },
    ],
    nt: [
      {
        id: "7",
        name: "Shop 7",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.402111,
        longitude: 114.121136,
        distance: null,
      },
      {
        id: "8",
        name: "Shop 8",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.402491,
        longitude: 114.115546,
        distance: null,
      },
      {
        id: "9",
        name: "Shop 9",
        location: "Metroplaza, Hing Fong Road",
        latitude: 22.402831,
        longitude: 114.139956,
        distance: null,
      },
    ],
  });

  // useEffect
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userlocation = await Location.getCurrentPositionAsync({});
      setLocation(userlocation);

      // calculate distance for each shop
      let newShopLocations = { ...shopLocations };
      console.log("location: ", userlocation);
      for (let area in newShopLocations) {
        for (let shop of newShopLocations[area]) {
          let distance = getDistance(
            {
              latitude: userlocation.coords.latitude,
              longitude: userlocation.coords.longitude,
            },
            { latitude: shop.latitude, longitude: shop.longitude }
          );
          console.log("distance: ", distance);
          shop.distance = (distance / 1000).toFixed(2);
        }
      }
      setShopLocations(newShopLocations);
    })();
  }, []);

  // function
  const handleNavigateToMyLocation = () => {
    if (mapRef && location) {
      mapRef.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  const changeLocation = (index) => {
    let area = index === 0 ? "hkIsland" : index === 1 ? "kowloon" : "nt";
    setCurrentArea(area);
    mapRef.animateToRegion({
      latitude: shopLocations[area][0].latitude,
      longitude: shopLocations[area][0].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.shopCard}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <View style={styles.cardDetail}>
          <Text style={styles.cardLocation}>{item.location}</Text>
          <Text>{item.distance} KM</Text>
        </View>
      </View>
    );
  };

  const AreaTab = (area) => (
    <FlatList
      data={shopLocations[area]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 22.302941,
          longitude: 114.176236,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        ref={(ref) => setMapRef(ref)}
      >
        {shopLocations[currentArea].map((shop) => (
          <Marker
            key={shop.id}
            coordinate={{ latitude: shop.latitude, longitude: shop.longitude }}
            title={shop.name}
          />
        ))}
        <TouchableOpacity
          style={styles.myLocationButton}
          onPress={handleNavigateToMyLocation}
        >
          <MaterialIcons name="my-location" size={24} color="white" />
        </TouchableOpacity>
      </MapView>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: () => AreaTab("hkIsland"),
          second: () => AreaTab("kowloon"),
          third: () => AreaTab("nt"),
        })}
        onIndexChange={(index) => {
          changeLocation(index);
          setIndex(index);
        }}
        initialLayout={{ width: Dimensions.get("screen").width }}
      />
    </View>
  );
}

export default ShopLocatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: Dimensions.get("screen").height / 2.5,
  },
  myLocationButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "blue",
    borderRadius: 24,
    padding: 12,
  },
  shopCard: {
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLocation: {
    fontSize: 16,
  },
  scene: {
    flex: 1,
  },
});
