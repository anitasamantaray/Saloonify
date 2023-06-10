import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'

import React, {useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';


const Home=({navigation})=>{

    const [latitude,setLatitude]=useState();
    const [longitude,setLongitude]=useState();
    return(
      <ScrollView>
        <View>
<View
        style={{
          width: '100%',
          marginTop: 10,
          marginBottom: 100,
          flexDirection: 'row',
          marginLeft:8,
          marginRight:10
          
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold',color:"blue",marginLeft:30}}>Welcome to Home page</Text>
</View>

             <View style={{ flexDirection: "row" }}>
            <Text style={{fontSize: 20,marginBottom:140,color:"green",fontWeight:"bold",marginLeft:20}}>Map Location </Text>
            
          </View>
          <TouchableOpacity
           onPress={() => {
              navigation.navigate("Sign");
            }}
            >
          <View style={{ flexDirection: "row", marginTop: 2 }}>
           
                  <Icon
                    name="location"
                    size={25}
                    style={{ color: "green", marginLeft: 15 }}
                  ></Icon>
                  <Text
                    style={[
                      styles.innertextStyle,
                      {
                        fontSize:15,
                        marginBottom:35,
                        color: "green",
                        marginLeft: 0,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    {/* {cityname} */}
                    Select on map
                  </Text>
                  
                </View>
                </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={[styles.action,{width:'45%'}]}>
            <TextInput
              placeholder="Latitude"
              placeholderTextColor={"#999"}
              // maxLength={6}
              keyboardType={"phone-pad"}
              value={latitude}
              // onChangeText={(val) => handleInputChange("present_zip", val)}
              //style={{color: colors.text}}
              style={{}}

              // placeholder="000-000"
              // placeholderTextColor={'#999'}
              // value={present_zip}
              // keyboardType="number-pad"
              // onChangeText={val => handleInputChange('present_zip', val)}
              // style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={[styles.action,{width:'45%'}]}>
            <TextInput
              placeholder="Longitude"
              placeholderTextColor={"#999"}
              // maxLength={6}
              keyboardType={"phone-pad"}
              value={longitude}
              // onChangeText={(val) => handleInputChange("present_zip", val)}
              //style={{color: colors.text}}
              style={{}}

              // placeholder="000-000"
              // placeholderTextColor={'#999'}
              // value={present_zip}
              // keyboardType="number-pad"
              // onChangeText={val => handleInputChange('present_zip', val)}
              // style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          </View>
          </View>
          </ScrollView>
    );

    
}
export default Home;
const styles=StyleSheet.create({
    action:{
        flexDirection: "row",
    marginTop: 20,
    marginBottom: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginLeft:15

    },
});