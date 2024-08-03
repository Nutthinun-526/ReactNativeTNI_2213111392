import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import Content from "./components/Content";
import { stylesLogin, stylesPractice } from "./styles/styles";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footMessage, setFootMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };

  return (
    
      <View style={stylesPractice.container}>
        <ProfileScreen />
        <Login/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-between",
  },
});

export default App;
