import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import AppFooter from "./components/AppFooter";
import { stylesPractice } from "./styles/styles";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footMessage, setFootMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

 
    const handleButtonClick = () =>{
    Alert.alert("Hello",`Input your fullname : ${fullname}`);
    }


  

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      <Content message={message} onButtonClick = {handleButtonClick} />
      <AppFooter footerMessage={footMessage} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-between",
  },
}
);

export default App;
