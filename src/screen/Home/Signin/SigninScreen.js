import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function SigninScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    forgetEmail: "",
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.signinForm}>
        <Text style={styles.signinText}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666362"
          onChangeText={(value) => handleInputChange("email", value)}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666362"
        />
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Forgot Password</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <FontAwesomeIcon icon={faClose} size={24} />
              </Pressable>
            </View>
            <TextInput
              style={styles.modalInput}
              placeholder="Email"
              placeholderTextColor="#666362"
              onChangeText={(value) => handleInputChange("forgetEmail", value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
            />
            <View style={styles.forgotBtnContainer}>
              <TouchableOpacity style={styles.formBtn}>
                <Text style={styles.formBtnText}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.formBtn}>
          <Text style={styles.formBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
    position: "relative",
  },
  signinForm: {
    justifyContent: "center",
    height: "80%",
  },
  signinText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    color: "#000",
    borderColor: "#000",
    paddingLeft: 20,
  },
  loginBtnContainer: {
    position: "absolute",
    bottom: 40,
    width: "95%",
    marginLeft: 10,
    marginRight: 10,
  },
  formBtn: {
    backgroundColor: "#006943",
    color: "#000",
    borderRadius: 25,
  },
  formBtnText: {
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
  // modal
  centeredView: {
    flex: 1,
    width: Dimensions.get("screen").width,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: Dimensions.get("screen").width / 1.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff5349",
  },
  modalInput: {
    height: 50,
    marginTop: 42,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 25,
    color: "#000",
    borderColor: "#000",
    paddingLeft: 20,
    width: Dimensions.get("screen").width / 1.2,
  },
  forgotBtnContainer: {
    width: "93%",
  },
});
