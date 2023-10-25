import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "react-native-check-box";
import { Picker } from "@react-native-picker/picker";
import PhoneInput from "react-native-international-phone-number";
import { useFonts } from "expo-font";
import { SelectList } from "react-native-dropdown-select-list";

function SignupScreen() {
  const [stage, setStage] = useState(3);
  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    title: "",
    fname: "",
    lname: "",
    contact: "",
    birthMonth: "",
    occupation: "",
    education: "",
    checkbox: false,
  });

  // const [showPicker, setShowPicker] = useState(false);
  const [checkboxSelect, setCheckboxSelect] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();
  const [inputValue, setInputValue] = useState("");

  const [selected, setSelected] = React.useState("");

  const title = [
    { key: "1", value: "Mr" },
    { key: "2", value: "Mrs" },
    { key: "3", value: "Ms" },
    { key: "4", value: "Miss" },
    { key: "5", value: "Dr" },
  ];

  const months = [
    { key: "1", value: "January" },
    { key: "2", value: "February" },
    { key: "3", value: "March" },
    { key: "4", value: "April" },
    { key: "5", value: "May" },
    { key: "6", value: "June" },
    { key: "7", value: "July" },
    { key: "8", value: "August" },
    { key: "9", value: "September" },
    { key: "10", value: "October" },
    { key: "11", value: "November" },
    { key: "12", value: "December" },
  ];

  const occupations = [
    { key: "1", value: "Businessman" },
    { key: "2", value: "Management/Professional" },
    { key: "3", value: "White Collar" },
    { key: "4", value: "Blue Collar" },
    { key: "5", value: "Housewife" },
    { key: "6", value: "Retired" },
    { key: "7", value: "Student" },
    { key: "8", value: "Other" },
  ];

  const educations = [
    { key: "1", value: "Universeity or above" },
    { key: "2", value: "Tertiary" },
    { key: "3", value: "Technical Institute" },
    { key: "4", value: "Secondary" },
    { key: "5", value: "Other" },
  ];

  useFonts({
    TwemojiMozilla: require("./TwemojiMozilla.ttf"),
  });
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleInputChange = (name, value) => {
    console.log("value", value);
    setForm({ ...form, [name]: value });
  };

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      {stage === 1 ? (
        <View>
          <View style={styles.signupForm}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("email", value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              value={form.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Email"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("confirmEmail", value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              value={form.confirmEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("password", value)}
              secureTextEntry={true}
              value={form.password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666362"
              onChangeText={(value) =>
                handleInputChange("confirmPassword", value)
              }
              secureTextEntry={true}
              value={form.confirmPassword}
            />
          </View>
        </View>
      ) : stage === 2 ? (
        <View>
          <View style={styles.signupForm}>
            <SelectList
              setSelected={(value) => handleInputChange("title", value)}
              data={title}
              save="value"
              boxStyles={styles.dropdown}
              placeholder="Select Title"
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("fname", value)}
              value={form.fname}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("lname", value)}
              value={form.lname}
            />
            <PhoneInput
              value={inputValue}
              onChangePhoneNumber={(value) =>
                handleInputChange("contact", value)
              }
              defaultCountry="HK"
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              placeholder="Number"
              phoneInputStyles={styles.phoneInput}
            />
            <SelectList
              setSelected={(value) => handleInputChange("birthMonth", value)}
              data={months}
              save="value"
              boxStyles={styles.dropdown}
              placeholder="Month of Birth"
            />
          </View>
        </View>
      ) : stage === 3 ? (
        <View>
          <SelectList
            setSelected={(value) => handleInputChange("occupation", value)}
            data={occupations}
            save="value"
            boxStyles={styles.dropdown}
            placeholder="Occupation"
          />
          <SelectList
            setSelected={(value) => handleInputChange("education", value)}
            data={educations}
            save="value"
            boxStyles={styles.dropdown}
            placeholder="Education"
          />
        </View>
      ) : (
        stage === 4 && (
          <View style={styles.tnc}>
            <Text style={styles.tncText}>
              I want to receive any promotional materials and offers of Italian
              Tomato.
            </Text>
            <View style={styles.tncCheckboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  handleInputChange("checkbox", !checkboxSelect);
                  setCheckboxSelect(!checkboxSelect);
                }}
                isChecked={checkboxSelect}
              />
              <Text style={styles.tncText2}>I have read and agree</Text>
            </View>
          </View>
        )
      )}
      <View style={styles.signupBtnContainer}>
        {stage < 4 ? (
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => {
              if (stage === 1) {
                if (form.email === "" || form.confirmEmail === "") {
                  alert("Please enter email");
                  return;
                }
                if (form.password === "" || form.confirmPassword === "") {
                  alert("Please enter password");
                  return;
                }
                if (form.email !== form.confirmEmail) {
                  alert("Email does not match");
                  return;
                }
                if (form.password !== form.confirmPassword) {
                  alert("Password does not match");
                  return;
                }
              } else if (stage === 2) {
                if (form.title === "") {
                  alert("Please select title");
                  return;
                } else if (form.fname === "") {
                  alert("Please enter first name");
                  return;
                } else if (form.lname === "") {
                  alert("Please enter last name");
                  return;
                } else if (form.contact === "") {
                  alert("Please enter contact number");
                  return;
                } else if (form.birthMonth === "") {
                  alert("Please enter month of birth");
                  return;
                }
              } else if (stage === 3) {
                if (form.occupation === "") {
                  alert("Please enter occupation");
                  return;
                } else if (form.education === "") {
                  alert("Please enter education");
                  return;
                }
              } else if (stage === 4) {
                if (checkboxSelect === false) {
                  alert("Please agree to terms and conditions");
                  return;
                } else {
                  alert("Success");
                }
              }
              setStage(stage + 1);
            }}
          >
            <Text style={styles.signupBtnText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupBtnText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
    position: "relative",
  },
  signupForm: {
    justifyContent: "center",
    height: "80%",
  },
  signupText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#000",
    color: "#fff",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    color: "#fff",
    borderColor: "#000",
    paddingLeft: 20,
  },
  phoneInput: {
    fontFamily: "TwemojiMozilla",
    container: {
      backgroundColor: "#000",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#F3F3F3",
    },
    flagContainer: {
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      backgroundColor: "#000",
      justifyContent: "center",
    },
  },
  signupBtnContainer: {
    position: "absolute",
    bottom: 40,
    width: "95%",
    marginLeft: 10,
    marginRight: 10,
  },
  signupBtn: {
    backgroundColor: "#006943",
    color: "#000",
    borderRadius: 25,
  },
  signupBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  forgotPassword: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  selectDropdown: {
    width: Dimensions.get("screen").width,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  tnc: {
    margin: 20,
  },
  tncCheckboxContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
  },
  tncText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tncText2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
