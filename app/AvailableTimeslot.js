import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Link,router } from 'expo-router'

const AvailableTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([
    {
      id: '1',
      time: '09:00 AM - 09:30 AM',
      date: '2024-01-11',
      availability: true,
    },
    {
      id: '2',
      time: '10:00 AM - 10:30 AM',
      date: '2024-01-12',
      availability: false,
    },
    {
      id: '3',
      time: '11:00 AM - 11:30 AM',
      date: '2024-01-13',
      availability: true,
    },
    {
      id: '4',
      time: '01:00 PM - 01:30 PM',
      date: '2024-01-14',
      availability: true,
    },
    {
      id: '5',
      time: '02:00 PM - 02:30 PM',
      date: '2024-01-15',
      availability: false,
    },
    {
      id: '6',
      time: '03:00 PM - 03:30 PM',
      date: '2024-01-16',
      availability: true,
    },
  ]);

  const handleTimeSlotPress = (id) => {
    const updatedTimeSlots = [...timeSlots];
  const selectedTimeSlot = updatedTimeSlots.find((slot) => slot.id === id);
     if (selectedTimeSlot) {
      selectedTimeSlot.availability = !selectedTimeSlot.availability;
      
      setTimeSlots(updatedTimeSlots);
    }
  };

  const renderTimeSlot = ({ item }) => (
    <TouchableOpacity onPress={() => handleTimeSlotPress(item.id)}>
      <View style={{ borderBottomWidth: 1, padding: 10,top:15,backgroundColor:"#e4e1dc",borderRadius:15, marginTop:20 }}>
        <Text>Time: {item.time}</Text>
        <Text>Date: {item.date}</Text>
        <Text>Availability: {item.availability ? 'Available' : 'Not Available'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
   
      <View>
    <FlatList
      data={timeSlots}
      keyExtractor={(item) => item.id}
      renderItem={renderTimeSlot}
    />
  <View>
     <Link href={"/BookingForm"} style={{backgroundColor:"orange", marginHorizontal: 30,borderRadius:10, marginTop:10,height:35,textAlign:"center",fontSize:18}}>Go To Booking Form</Link>
     </View>
     </View>
    
  );
};

export default AvailableTimeSlots;