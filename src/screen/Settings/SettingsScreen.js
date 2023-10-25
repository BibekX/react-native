import * as React from "react";
import {
  Button,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Linking,
  Share,
} from "react-native";

const SettingsScreen = ({ route, navigation }) => {
  const shareData = async () => {
    try {
      await Share.share({
        message:
          "Check out the new Italian Tomato Mobile APP! Register to enjoy exclusive privileges! Download for free via: http://www.italiantomato.com.hk/mobileapp/",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Language")}>
          <Text style={styles.menuTitle}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Account Management")}
        >
          <Text style={styles.menuTitle}>Account Management</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy Policy")}>
          <Text style={styles.menuTitle}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Terms & Conditions")}
        >
          <Text style={styles.menuTitle}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialBtnContainer}>
        <TouchableOpacity style={styles.shareBtn} onPress={shareData}>
          <Text style={styles.btnText}>Share This App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbBtn}>
          <Text
            style={styles.btnText}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/ItalianTomatoHongKong")
            }
          >
            Visit our Facebook Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BC3752",
  },
  menuTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
    margin: 30,
  },
  socialBtnContainer: {
    alignItems: "center",
  },
  shareBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 55,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: "#006945",
    marginTop: 50,
  },
  fbBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 55,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: "#3B5998",
    marginTop: 30,
  },
  btnText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
});
