import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

export default function App() {
  const [textOutput, setTextOutput] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{padding: 40, flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', color:'white', width: 100, height: 100, justifyContent: 'center', alignItems:'center'}}>
        <Text>1</Text>
      </View>

      <View style={{backgroundColor: 'blue', color: 'white', width: 100, height: 100, justifyContent: 'center', alignItems:'center'}}>
        <Text>2</Text>
      </View>

      <View style={{backgroundColor: 'green', color: 'white', width: 100, height: 100, justifyContent: 'center', alignItems:'center'}}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
