import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("News Detail", props);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={props.img ? require("../../../assets/image1.png") : null}
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>
              {props.title.length > 45
                ? props.title.substring(0, 45) + "..."
                : props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    maxWidth: Dimensions.get("screen").width / 1.05,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: "#fff",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#fff",
    opacity: 0.8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
  },
});
