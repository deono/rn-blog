import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyles}>Enter title: </Text>
      <TextInput
        style={styles.inputStyles}
        value={title}
        onChangeText={newText => setTitle(newText)}
      />
      <Text style={styles.labelStyles}>Enter Content: </Text>
      <TextInput
        style={styles.inputStyles}
        value={content}
        onChangeText={newText => setContent(newText)}
      />
      <Button
        onPress={() => addBlogPost(title, content)}
        title="Add blog post"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
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

export default CreateScreen;
