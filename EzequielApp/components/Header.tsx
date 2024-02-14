import React, { FC } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  avatar: string;
  username: string;
}

const Header: FC<Props> = ({ avatar, username }) => {
  return (
    <View style={styles.container}>
      {avatar && (
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
      )}
      <Text style={styles.text}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1C1C1C",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;