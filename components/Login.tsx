import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";
import { stylesPractice } from "../styles/styles";
import { useState, useEffect } from "react";
import { styles } from "../styles/styles";

function Login(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={stylesLogin.container}>
      <View>
        <TextInput
          style={stylesPractice.input}
          placeholder="Enter Name"
          value={fullname}
          onChangeText={setFullname}
        />
        <TextInput
          style={stylesPractice.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={stylesLogin.buttonSubmit}>
          <Button title="SUBMIT"/>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

export default Login;
