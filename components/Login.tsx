/* import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
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
 */

import { View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles"; // เรียกใช้สไตล์จากไฟล์ styles.ts
  const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ValidityStateEmail = (email:string):boolean => {
    const rechaeckEmail = /\S+@\S+\.\S+/
    return rechaeckEmail.test(email);
  }

  const handleSubmit = () => {
    let errorMessage = "";
    if (!name) {
      /* Alert.alert("Alert", "Please enter name.", [{ text: "OK" }]);
      return; //break */
      errorMessage += "Please enter Name\n";
    }

    //ตรวจสอบการป้อนรหัสผ่าน
    if (!password) {
      /* Alert.alert("Alert", "Please enter password.", [{ text: "OK" }]);
      return; //break */
      errorMessage += "Please enter Password\n";
    }
    else if(password.length<6){
      errorMessage += "Password must be at lease 6 characters\n"
    }

    if (!email) {
      /* Alert.alert("Alert", "Please enter email.", [{ text: "OK" }]);
      return; //break */
      errorMessage += "Please enter Email";
    }
    else if (!ValidityStateEmail(email)){
      errorMessage += "Invalid Email format\n"
    } 
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return; //break
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View>
        <Button title="SUBMIT" onPress={handleSubmit} />
      </View>
    </View>
  );
};
export default Login;
