import { StyleSheet, Text, View } from "react-native";
import App from "../App";
import { Link,Redirect } from "expo-router";
import Home from "../Home";
export default function Page() {
  return (
    <Redirect href={"/Welcome"}/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  
});
