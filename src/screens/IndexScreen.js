import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blog => blog.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.rowStyles}>
              <Text style={styles.titleStyles}>{item.title}</Text>
              <Feather style={styles.iconStyles} name="trash-2" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
  rowStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  titleStyles: {
    fontSize: 18
  },
  iconStyles: {
    fontSize: 24
  }
});

export default IndexScreen;
