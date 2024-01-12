import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button, Pressable
} from 'react-native';

import React, {useState} from 'react';
import { Link, router, useNavigation } from 'expo-router';


const Home=()=>{

    return( 
   <View>
    <Text style={{position:"absolute",top:100,left:10, fontSize:20}}>Hello Anita </Text>
   
<Text>Go to main page</Text>
<Link href={"/login"}></Link>

   </View>
    );

    
}
export default Home;
