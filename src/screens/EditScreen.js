import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyles}>Edit Title</Text>
      <TextInput
        style={styles.inputStyles}
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  container: {
    margin: 10
  },
  inputStyles: {
    fontSize: 18,
    backgroundColor: "#C4C4C4",
    color: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10
  },
  labelStyles: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5
  }
});

export default EditScreen;
