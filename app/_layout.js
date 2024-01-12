
import { Stack } from "expo-router";
import Profile from "./AvailableTimeslot";
import BookAppointment from "./BookingForm";
export default function Layout(){
    return(
        
        <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
      <Stack.Screen name="AvailableTimeslot"/>
      <Stack.Screen name="BookingForm"/>
       </Stack>     
    );
}