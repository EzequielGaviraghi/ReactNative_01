import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  comments: number;
  reposts: number;
  likes: number;
}

const Social: FC<Props> = ({ comments, reposts, likes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Feather name="message-circle" size={18} color="white" />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.item}>
        <Feather name="repeat" size={18} color="white" />
        <Text style={styles.text}>{reposts}</Text>
      </View>
      <View style={styles.item}>
        <Feather name="heart" size={18} color="white" />
        <Text style={styles.text}>{likes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Social;