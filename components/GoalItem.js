import React from "react";
import { View, StyleSheet, Text } from "react-native";

const GoalItem = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    marginVertical: 10
  }
});

export default GoalItem;
