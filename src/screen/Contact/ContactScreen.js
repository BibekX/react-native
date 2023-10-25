import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faPhone} style={styles.icon} size={30} />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} size={30} />
        </View>
      </View>
      <Text>Call Us</Text>
      <Text>(852) 3765 1000</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Call Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  iconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    padding: 10,
    margin: 20,
  },
  icon: {
    color: "#333",
  },
  image: {
    height: Dimensions.get("screen").height / 2,
  },
  text: {
    padding: 15,
    fontSize: 18,
    textAlign: "justify",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: "#3B5998",
    margin: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
});
