import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = props => {
  const [title, setTitle] = useState(props.initialValues.title);
  const [content, setContent] = useState(props.initialValues.content);
  //
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyles}>{props.titleLabel}</Text>
      <TextInput
        style={styles.inputStyles}
        value={title}
        onChangeText={newText => setTitle(newText)}
      />
      <Text style={styles.labelStyles}>{props.contentLabel}</Text>
      <TextInput
        style={styles.inputStyles}
        value={content}
        onChangeText={newText => setContent(newText)}
      />
      <Button
        title="Save post"
        onPress={() => props.onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
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

export default BlogPostForm;
