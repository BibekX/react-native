import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../../components/Card/Card";

function NewsScreen() {
  const data = [
    {
      id: "1",
      title: "Japan shine Muscat 1 | The savory cake",
      img: "../../../assets/image1.png",
    },
    {
      id: "2",
      title: "Japan shine Muscat 2 | The savory cake",
      img: "../../../assets/image1.png",
    },
    {
      id: "3",
      title: "Japan shine Muscat 3 | The savory cake",
      img: "../../../assets/image1.png",
    },
    {
      id: "4",
      title: "Japan shine Muscat | The savory cake",
      img: "../../../assets/image1.png",
    },
    {
      id: "5",
      title: "Japan shine Muscat | The savory cake",
      img: "../../../assets/image1.png",
    },
    {
      id: "6",
      title: "Japan shine Muscat | The savory cake",
      img: "../../../assets/image1.png",
    },
  ];

  const renderItem = ({ item }) => {
    return <Card title={item.title} img={item.img} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    padding: 10,
  },
});
