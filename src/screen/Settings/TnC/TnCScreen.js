import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const TnCScreen = () => {
  return (
    <View style={styles.view}>
      <Text>
        Tomato Club APP Membership Application: The Applicant is required to
        download Tomato Club mobile APP and register for a Tomato Club Member
        with email address at 'Join Now' section. Each valid email address can
        register once only. Any spending at Italian Tomato before the applicant
        has become Tomato Club mobile APP member is not eligible for earning
        Points. To be eligible for VIP membership application, the applicant is
        required to accumulate spending of $1000 on one Tomato Club Mobile APP
        account within the time limit of 60 days from the date of first recorded
        transaction.
      </Text>
    </View>
  );
};

export default TnCScreen;

const styles = StyleSheet.create({
  view: { flex: 1 },
  text: {
    padding: 15,
    fontSize: 20,
    textAlign: "justify",
  },
});
