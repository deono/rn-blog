import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {} from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

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

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    )
  };
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
