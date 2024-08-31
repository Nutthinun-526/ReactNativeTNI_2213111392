import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

const CreatePostScreens = ({ navigation, route }: any): React.JSX.Element => {
  const [postText, setPostText] = React.useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="Tell something...?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
          });
        }}
      />
    </>
  );
};

export default CreatePostScreens;

const styles = StyleSheet.create({});
