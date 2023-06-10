

import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button, 
   } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';


// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const Login= ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const submit = async () => {
    if(!email || !password){
        if(!email){
      setEmailError(true)
    }else{
      setEmailError(false)
    }
    if(!password){
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }
   
}
else{
    navigation.navigate('Home')
    setEmail(),
    setPassword(),
    setEmailError(false), 
    setPasswordError(false)
}
   
//    else(!email || !password);{
//     return true
//    }
  };
  return (
    <View style={{backgroundColor:"#CECECE",marginTop:50,marginLeft:20,marginRight:20}}>
    <View
        style={{
          width: '100%',
          marginTop: 10,
          marginBottom: 100,
          flexDirection: 'row',
          marginLeft:8,
          marginRight:10
          
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold',color:"blue"}}>Please Login</Text>
        
      </View>

       <View
       style={{
         flexDirection: 'row',

         borderBottomWidth: 1,
         borderBottomColor: '#f2f2f2',
         backgroundColor: '#fff',
         paddingBottom: 5,
         borderRadius: 18,
         paddingLeft: 10,
         height: 50,
         width: 300,
         marginLeft: 12,
         marginRight:12,
         marginTop: 4,
       }}>
        <TextInput
            placeholder="User Id*"
            placeholderTextColor="#4f4958"
            value={email}
            // keyboardType="charector"
            
            onChangeText={(text)=> setEmail(text)}
            // onFocus={val => handleInputChange('phonenum', val)}
          />
        </View>
        {emailError && (
        <Text style={{marginLeft:15, color:"red"}}>
          **Please enter your User Id
        </Text>
      )}
        <View
       style={{
         flexDirection: 'row',

         borderBottomWidth: 1,
         borderBottomColor: '#f2f2f2',
         backgroundColor: '#fff',
         paddingBottom: 5,
         borderRadius: 18,
         paddingLeft: 10,
         height: 50,
         width: 300,
         marginLeft: 12,
         marginRight:12,
         marginTop: 18,
       }}>
        <TextInput
        placeholder="Password*"
            placeholderTextColor="#4f4958"
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=>setPassword(text)}
        />
        </View>
        {passwordError && (
        <Text style={{marginLeft:15, color:"red"}}>
          **Please enter password
        </Text>
      )}
        
        <View style={{marginTop:60,borderRadius:50, marginLeft:15,marginRight:15}}>
          <Button title='Login'onPress={()=>submit()}/>
        </View>
        <View style={{marginLeft:90,marginTop:20}}>
          <Text style={{fontSize:16}}>Forgot your password?</Text>
          </View>
        </View>
  );

}
export default Login;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});