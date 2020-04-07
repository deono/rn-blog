import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  // get the post to show from the state
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text style={styles.titleStyles}>{blogPost.title}</Text>
      <Text style={styles.contentStyles}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  titleStyles: {
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    borderBottomWidth: 1
  },
  contentStyles: {
    fontSize: 16,
    marginHorizontal: 15
  }
});

export default ShowScreen;
