import { StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native";
import Feed from "./Feed/Feed";

export default function App() {
  const data = [
    {
      id: "1",
      avatar: "https://github.com/EzequielGaviraghi",
      username: "Ezequiel Gaviraghi",
      comments: 10,
      reposts: 99,
      likes: 1200,
      text: "Conteúdo da postagem 1",
      image: "https://www.senacrs.com.br/assets/images/senac_logo_new.png",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Feed
              avatar={item.avatar}
              username={item.username}
              comments={item.comments}
              reposts={item.reposts}
              likes={item.likes}
              text={item.text}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
  },
});
