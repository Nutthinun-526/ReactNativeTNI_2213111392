import {StyleSheet,Text,View,Image, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const ProfileScreen = () : React.JSX.Element => {
    const Profile = require("../assets/Profile.png");
    const NewProfile = require("../assets/IMG_4302.jpg");

    const [name,setName] = useState("Nutthinun Panawong");
    const [image,setImage] = useState(Profile);
    
    const handleChangeName = () => {
      setName (name=="Nnutthinun Panawong" ? "No name" : "Nnutthinun Panawong");
    }

    const handleChangeImage = () => {
      setImage (image==Profile ? "No Image" : Profile);
    }

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={Profile} style={styles.profileImage}/>
            
            <Text style={styles.profileName}>{name}</Text>
           
        </View>
    </View>
  );
};

export default ProfileScreen