import * as React from "react";
import { Button, View, Text, StyleSheet, Dimensions } from "react-native";

const LanguageScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Button title="English" />
      <Button title="中文" />
    </View>
  );
};

export default LanguageScreen;

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
