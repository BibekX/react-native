import * as React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import AboutUsScreen from "../../screen/AboutUs/AboutUsScreen";
// import ShopLocatorScreen from "../../screen/ShopLocator/ShopLocatorScreen";
import OurBrandsScreen from "../../screen/OurBrands/OurBrandsScreen";
import {
  HomeStackNavigator,
  AboutUsStackNavigator,
  NewsStackNavigator,
  SettingsStackNavigator,
  ContactUsStackNavigator,
  ShopLocatorStackNavigator,
} from "../Stack/StackNavigator";
// import ContactScreen from "../../screen/Contact/ContactScreen";
import CouponScreen from "../../screen/Home/CouponScreen";
import MyAccountScreen from "../../screen/MyAccount/MyAccountScreen";

import {
  faHouse,
  faGear,
  faUtensils,
  faCartShopping,
  faComment,
  faNewspaper,
  faAddressBook,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import SignupScreen from "../../screen/Home/Signup/SignupScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const globalOptions = (navigation) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesomeIcon
          icon={faBars}
          size={24}
          color="#fff"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
    ),
  };
};

// const ShopLocatorScreenStack = () => (
//   <Stack.Navigator
//     initialRouteName="ShopLocatorScreen"
//     screenOptions={{ headerShown: false }}
//   >
//     <Stack.Screen name="ShopLocatorScreen" component={ShopLocatorScreen} />
//   </Stack.Navigator>
// );

const OnlineOrderingDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => (
          <View style={styles.view}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={styles.icon}
              size={30}
            />
            <Text style={styles.text}>Online Cake Ordering</Text>
          </View>
        )}
        onPress={() => Linking.openURL("http://italiantomato.com.hk/cake/tc/")}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <OnlineOrderingDrawerContent {...props} />}
    screenOptions={{
      drawerStyle: {
        backgroundColor: "#DA1F26",
        width: 300,
      },
      headerStyle: {
        backgroundColor: "#DA1F26",
      },
      headerShown: false,
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 24,
      },
      drawerActiveTintColor: "#fff",
      drawerInactiveTintColor: "#fff",
    }}
  >
    <Drawer.Screen
      name="HomeScreen"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon icon={faHouse} style={styles.icon} size={30} />
            <Text style={styles.text}>Home</Text>
          </View>
        ),
        title: "ITALIAN TOMATO",
      }}
      component={HomeStackNavigator}
    />
    <Drawer.Screen
      name="About"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon icon={faComment} style={styles.icon} size={30} />
            <Text style={styles.text}>About Us</Text>
          </View>
        ),
        title: "About Us",
      }}
      component={AboutUsStackNavigator}
    />
    <Drawer.Screen
      name="News"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon icon={faNewspaper} style={styles.icon} size={30} />
            <Text style={styles.text}>News</Text>
          </View>
        ),
        title: "News",
      }}
      component={NewsStackNavigator}
    />
    <Drawer.Screen
      name="Settings Screen"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon icon={faGear} style={styles.icon} size={30} />
            <Text style={styles.text}>Settings</Text>
          </View>
        ),
        title: "Settings",
      }}
      component={SettingsStackNavigator}
    />
    <Drawer.Screen
      name="OurBrandsScreen"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon icon={faUtensils} style={styles.icon} size={30} />
            <Text style={styles.text}>Our Brands</Text>
          </View>
        ),
        title: "Our Brands",
      }}
      component={OurBrandsScreen}
    />
    <Drawer.Screen
      name="ContactUsScreen"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon
              icon={faAddressBook}
              style={styles.icon}
              size={30}
            />
            <Text style={styles.text}>Contact Us</Text>
          </View>
        ),
        title: "Contact Us",
      }}
      component={ContactUsStackNavigator}
    />
    <Drawer.Screen
      name="ShopLocator"
      options={{
        drawerLabel: () => (
          <View style={styles.view}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={styles.icon}
              size={30}
            />
            <Text style={styles.text}>Shop Location</Text>
          </View>
        ),
        title: "Shop Locator",
      }}
      component={ShopLocatorStackNavigator}
    />
    {/* <Drawer.Screen
      name="Join Now"
      options={{
        drawerLabel: () => (
          <View style={styles.viewBottom}>
            <Text style={styles.text}>Join Now</Text>
          </View>
        ),
        title: "Join Now",
      }}
      component={SignupScreen}
    />
    <Drawer.Screen
      name="Coupons"
      options={{
        drawerLabel: () => (
          <View style={styles.viewBottom}>
            <Text style={styles.text}>Coupons</Text>
          </View>
        ),
        title: "Coupons",
      }}
      component={CouponScreen}
    />
    <Drawer.Screen
      name="My Account"
      options={{
        drawerLabel: () => (
          <View style={styles.viewBottom}>
            <Text style={styles.text}>My Account</Text>
          </View>
        ),
        title: "My Account",
      }}
      component={MyAccountScreen}
    /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
