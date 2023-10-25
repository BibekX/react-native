import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const PrivacyScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>
        Italian Tomato, from time to time, (collectively “we”, “us”, “our”, the
        “Company”) respects your privacy and is committed to maintain your
        personal data in accordance with the requirements of the Personal Data
        (Privacy) Ordinance (the "Ordinance") and to the extent applicable. We
        take all practicable steps to ensure the collection, transmission,
        storage and usage of your personal data complies with the Ordinance. In
        relation to personal data supplied to us through our website, social
        media or otherwise, any use of our website and web applications or your
        continued relationship with us shall be deemed to be your acceptance and
        consent to this Privacy Policy as amended from time to time.
      </Text>
    </View>
  );
};

export default PrivacyScreen;

const style = StyleSheet.create({
  text: {
    padding: 15,
    fontSize: 20,
    textAlign: "justify",
  },
});
