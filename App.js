import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default function App() {

  const [randomColor,setRandomColor] = useState("rgb(32,0,126)");
  const changeBG = () =>{     
    let color = 'rgb('+
    Math.floor(Math.random() * 256)+
    ','+
    Math.floor(Math.random() * 256)+
    ','+
    Math.floor(Math.random() * 256)+
      ')';
      setRandomColor(color);
    }     
  
  const myrestClicked = () =>{
   let mybg="rgb(0,0,0)";
    setRandomColor(mybg);
  }
  
  return (
    <>
    <StatusBar backgroundColor={randomColor} />
    <View style={[styles.container, {backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>Tap Me</Text>
      </TouchableOpacity>      
    </View>
    <View style={[styles.btn, {backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={myrestClicked}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'    
  },
  btn:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'     
  },
  btnText:{
    fontSize:20,    
    backgroundColor:"rgb(238, 203, 2)",
    paddingHorizontal:40,
    paddingVertical:10,
    color:"#030000",
    borderRadius:20    
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingHorizontal:40,
    paddingVertical:10,
    color:"#FFFFFF",
    borderRadius:20    
  }
})