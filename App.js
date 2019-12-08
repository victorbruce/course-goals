import React, {useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  const [textOutput, setTextOutput] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{textOutput}</Text>
      <Button title="Change text" onPress={() => setTextOutput('Text changed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
