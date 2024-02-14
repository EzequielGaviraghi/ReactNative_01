import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

interface Props {
  text: string;
  image: string;
}

const Body: FC<Props> = ({ text, image }) => {
  return (
    <View style={styles.container}>
      {text && <Text style={styles.text}>{text}</Text>}
      {image?.length > 0 && (
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      )}
    </View>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 5,
  },
  image: {
    width: width * 0.9,
    aspectRatio: 1.5,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Body;