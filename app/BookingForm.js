import React, { useState } from 'react';
import { View, Text,StyleSheet, TextInput, Button, Alert,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (text) => {

    setName(text);
    validateForm();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateForm();
  };

  const handleTimeSlotChange = (text) => {
    setTimeSlot(text);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && timeSlot.trim() !== '');
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Perform submission logic here
      Alert.alert('Booking Successful', 'Thank you for your booking!');
      // Reset form after submission
      setName('');
      setEmail('');
      setTimeSlot('');
      setIsFormValid(false);
    } else {
      Alert.alert('Validation Error', 'Please fill in all fields before submitting.');
    }
  };

  return (
    <ScrollView>
    <View style={styles.main}>
      <Text style={styles.textstyle}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
        style={styles.textInput}
      />

      <Text style={styles.textstyle}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        keyboardType="email-address"
        style={styles.textInput}
      />

      <Text style={styles.textstyle}>Time Slot:</Text>
      <TextInput
        value={timeSlot}
        onChangeText={handleTimeSlotChange}
        placeholder="Enter your preferred time slot"
        style={styles.textInput}
      />

      {/* <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!isFormValid}
      /> */}
       <TouchableOpacity
        style={{ backgroundColor: isFormValid ? 'blue' : 'orange', padding: 10, borderRadius: 5 , marginHorizontal: 30,top:30}}
        onPress={handleSubmit}
        // disabled={!isFormValid}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default BookingForm;
const styles = StyleSheet.create({
    main: {
      backgroundColor: '#f6f5f3',
      marginLeft:30,
      marginHorizontal: 50,
      borderRadius:20,
      marginTop:100,
      height:400,
      width:300
      
    },
    textInput: {
      backgroundColor: '#e4e1dc',
      marginLeft:10,
      marginTop:20,
      height:40,
      marginHorizontal: 30,
      borderRadius:10,
      fontSize:15,
      textAlign:"left",
      

    },
    textstyle:{
     marginLeft:10,
      marginTop:17,
      fontSize:20,
      


    },
    

    
  });