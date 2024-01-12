import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link,router } from 'expo-router'
const Welcome=()=>{
    return(
<View>
    <Text style={{color:"#bc2a8d", textAlign:"center",marginTop:170,fontSize:30,fontWeight:"bold"}}>Welcome to Saloonify</Text>
    <Link href={"/AvailableTimeslot"} style={{backgroundColor:"orange", marginHorizontal: 30,borderRadius:10, marginTop:30,height:35,textAlign:"center",fontSize:18}}>Go To Timeslot Page</Link>
</View>
    );
}

export default Welcome;