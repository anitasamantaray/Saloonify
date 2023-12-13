import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is a Login Screen</Text>
            {/* <TouchableOpacity onPress={()=>submit()}onPress={()=>navigation.navigate('Home')}> */}
                <Text>Move to Home Screen</Text>
            {/* </TouchableOpacity> */}
        </View>
    )
}
export default Login;
import * as Location from 'expo-location';