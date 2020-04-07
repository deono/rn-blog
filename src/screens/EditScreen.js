import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      titleLabel="Edit Title: "
      contentLabel="Edit Content: "
      onSubmit={(title, content) => {
        editBlogPost(id, title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({
  //styles
});

export default EditScreen;
