import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

export default function App() {
  const [textOutput, setTextOutput] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{padding: 40}}>
      <View style={{flexDirection:"row", justifyContent:"center", alignItems: "center"}}>
        <TextInput placeholder="Course Goal" style={{width: '80%', borderWidth: 1, borderColor: 'black', padding:10}} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
