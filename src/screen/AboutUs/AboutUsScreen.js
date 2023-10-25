import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const AboutUsScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title="Go to First Page"
      /> */}
      <Image
        source={require("../../../assets/image1.png")}
        style={style.image}
      />
      <Text style={style.text}>
        Italian Tomato Hong Kong has over three decades of history, which began
        when the brand Italian Tomato was first introduced to Hong Kong in 1987.
        Over the years, much has changed in dining styles evolved with new
        global dimensions, but over the course of our brand's evolution, the
        values on which Italian Tomato was built - "The Satisfaction of heart"
        for our beloved guests, still defining our goals today.
      </Text>
    </View>
  );
};

export default AboutUsScreen;

const style = StyleSheet.create({
  image: {
    height: Dimensions.get("screen").height / 2,
  },
  text: {
    padding: 15,
    fontSize: 18,
    textAlign: "justify",
  },
});
