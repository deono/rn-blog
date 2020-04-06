import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = () => {
  const { state } = useContext(Context);

  // get the post to show from the state
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StylesSheet.create({
  //styles
});

export default ShowScreen;
