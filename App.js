import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image,Alert} from 'react-native';
const imagen =  require("./assets/ruleta.jpg")
let estrategia = {
  name: ""
}

const nameHandeler = e =>{
  estrategia.name= e.target.value
}

const mostrarMensaje = () =>{
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Simulated Anniling Aplicado a “SO WHO’S COUNTING”</Text>
      <Text>{estrategia.name}</Text>
      <Text> Lina Maria Bocanegra</Text>
      <Text> Cristian Felipe Ramirez Franco </Text>
      <Image source={require('./assets/ruleta.jpg')}/>

      <TextInput type="number" onChange={nameHandeler} value= {estrategia.name} placeholder= "Ingrese el numero"/>
       <Button onPress={mostrarMensaje} title="Mostro"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"red",
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
