import React from "react";
import {View,Text} from "react-native";

function App(){
  return(
   <View style={{backgroundColor:'blue', height:"100%", width:"300px"}}>
    <View style={{backgroundColor:'orange', height:"20%", width:"100%"}}> <Text style={{color: '#000', fontSize:10}} >Componente View</Text>
    <Text style={{color: '#000', fontSize:10}} >Wesley Felipe </Text>
    <Text style={{color: '#000', fontSize:10}} >27/02/2026</Text>
    </View>
    <View style={{backgroundColor:'yellow', height: "70%", width:"100px"}}>
    <Text style={{color: '#000', fontSize:10}} >Componente View</Text>
    <Text style={{color: '#000', fontSize:10}} >Wesley Felipe </Text>
    <Text style={{color: '#000', fontSize:10}} >27/02/2026</Text>
    </View>
    <View style={{ backgroundColor: 'red', height: "10%", width:  "200px" }}>
    <Text style={{color: '#000', fontSize:10}} >Componente View</Text>
    <Text style={{color: '#000', fontSize:10}} >Wesley Felipe </Text>
    <Text style={{color: '#000', fontSize:10}} >27/02/2026</Text>
    </View>
    
  </View>
  );
}
export default App;
