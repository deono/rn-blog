import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      titleLabel="Edit Title: "
      contentLabel="Edit Content: "
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({
  //styles
});

export default EditScreen;
