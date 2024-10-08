import { StyleSheet, TextInput, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const AxiosPostData = () => {

    const [formData, setFormData] = useState({name:'',email:''});

    const handleInputchange = (key:string,value:string) => {
        setFormData(prevState=>({...prevState,[key]:value}));
    };

    const  handelSubmit = async () => {
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',formData);
            Alert.alert("User Created",
                `ID : ${response.data.id}
                Name : ${response.data.name}
                Email : ${response.data.email}`
            );
        }catch{
            Alert.alert('Error', 'Failed to create user');
        }
    }

  return (
    <View style= {styles.container}>
        <TextInput
        style={styles.input}/>
    </View>
  )
}

export default AxiosPostData

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding: 20,
        marginTop:50
    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:12,
        paddingHorizontal:10,
    },
});