import {StyleSheet,Text,View,Image, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles'

const ProfileScreen = () : React.JSX.Element => {
    const Profile = require("../assets/Profile.png");
    const NewProfile = require("../assets/IMG_4302.jpg");

    const [name,setName] = useState("Nutthinun Panawong");
    const [image,setImage] = useState(Profile);
    
    const handleChangeName = () => {
      setName (name=="Nutthinun Panawong" ? "No name" : "Nutthinun Panawong");
    }

    const handleChangeImage = () => {
      setImage (image==Profile ? NewProfile : Profile);
    }

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={image} style={styles.profileImage}/>
            <View>
            <Text style={styles.profileName}>{name}</Text>
            <Button title="Change name" onPress={handleChangeName}/>
            <Text>{'\n'}</Text>
            <Button title="Change Image" onPress={handleChangeImage}/>
            </View>
        </View>
    </View>
  );
};

export default ProfileScreen