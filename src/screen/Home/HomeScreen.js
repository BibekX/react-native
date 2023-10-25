import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Slider from "../../components/Carousel/Slider";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Slider />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Sign In"
          onPress={() => navigation.navigate("Sign in")}
        />
        <Button
          style={styles.button}
          title="Join"
          onPress={() => navigation.navigate("Sign up")}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 1,
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    color: "#DA1F26",
  },
});
