import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEneteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEneteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10
  }
});

export default GoalInput;
