import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

const MyAccountScreen = () => {
  const handleInputChange = (name, value) => {
    console.log("value", value);
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#666362"
        onChangeText={(value) => handleInputChange("fname", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#666362"
        onChangeText={(value) => handleInputChange("lname", value)}
      />
      {/* <PhoneInput
        style={{ fontFamily: "TwemojiMozilla" }}
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        defaultCountry="HK"
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
        placeholder="Number"
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Month of Birth"
        placeholderTextColor="#666362"
        onChangeText={(value) => handleInputChange("birthMonth", value)}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Occupation"
        placeholderTextColor="#666362"
        onChangeText={(value) => handleInputChange("occupation", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        placeholderTextColor="#666362"
        onChangeText={(value) => handleInputChange("education", value)}
      />
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    color: "#000",
    borderColor: "#000",
    paddingLeft: 20,
    width: Dimensions.get("screen").width - 50,
  },
  btnContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: "#006945",
    margin: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
});
