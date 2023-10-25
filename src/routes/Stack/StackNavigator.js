import { createStackNavigator } from "@react-navigation/stack";

// Home
import HomeScreen from "../../screen/Home/HomeScreen";
import SigninScreen from "../../screen/Home/Signin/SigninScreen";
import SignupScreen from "../../screen/Home/Signup/SignupScreen";

//About Us
import AboutUsScreen from "../../screen/AboutUs/AboutUsScreen";

// News
import NewsScreen from "../../screen/News/NewsScreen";
import NewsDetail from "../../screen/News/NewsDetail";

// Settings
import SettingsScreen from "../../screen/Settings/SettingsScreen";
import LanguageScreen from "../../screen/Settings/Language/LanguageScreen";
import PrivacyScreen from "../../screen/Settings/Privacy/PrivacyScreen";
import TnCScreen from "../../screen/Settings/TnC/TnCScreen";

// Our Brands
import OurBrandsScreen from "../../screen/OurBrands/OurBrandsScreen";

//Contact Us
import ContactScreen from "../../screen/Contact/ContactScreen";

// Shop Locator
import ShopLocatorScreen from "../../screen/ShopLocator/ShopLocatorScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#DA1F26",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  headerTintColor: "#fff",
  headerBackTitleVisible: false,
};

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
function HomeStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="ITALIAN TOMATO"
        component={HomeScreen}
        options={globalOptions(navigation)}
      />
      <Stack.Screen name="Sign in" component={SigninScreen} />
      <Stack.Screen name="Sign up" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AboutUsStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="About Us"
        component={AboutUsScreen}
        options={globalOptions(navigation)}
      />
    </Stack.Navigator>
  );
}

function NewsStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="News List"
        component={NewsScreen}
        options={globalOptions(navigation)}
      />
      <Stack.Screen name="News Detail" component={NewsDetail} />
    </Stack.Navigator>
  );
}

function SettingsStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={globalOptions(navigation)}
      />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Privacy Policy" component={PrivacyScreen} />
      <Stack.Screen name="Terms & Conditions" component={TnCScreen} />
    </Stack.Navigator>
  );
}

function OurBrandsStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Our Brands"
        component={OurBrandsScreen}
        options={globalOptions(navigation)}
      />
    </Stack.Navigator>
  );
}

function ContactUsStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Contact Us"
        component={ContactScreen}
        options={globalOptions(navigation)}
      />
    </Stack.Navigator>
  );
}

function ShopLocatorStackNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Shop Locator"
        component={ShopLocatorScreen}
        options={globalOptions(navigation)}
      />
    </Stack.Navigator>
  );
}

export {
  HomeStackNavigator,
  AboutUsStackNavigator,
  NewsStackNavigator,
  SettingsStackNavigator,
  ContactUsStackNavigator,
  ShopLocatorStackNavigator,
};
