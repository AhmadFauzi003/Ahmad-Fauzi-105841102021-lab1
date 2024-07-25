import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const favoriteItems = [
  {
    id: 1,
    url: require("../assets/products/RTX 2060.jpg"),
    caption: "RTX 2060 GAMING 8GB",
    price: "20$",
    rating: 10,
    reviews: 10,
  },
  {
    id: 2,
    url: require("../assets/products/Wired Keyboard Logitech K120.jpg"),
    caption: "Wired Keyboard Logitech K120",
    price: "100$",
    rating: 10,
    reviews: 10,
  },
  {
    id: 3,
    url: require("../assets/products/tws.jpeg"),
    caption: "TWS",
    price: "15$",
    rating: 10,
    reviews: 10,
  },
  {
    id: 4,
    url: require("../assets/products/monitor.jpg"),
    caption: "Koorui 24.5 inch FHD Gaming Monitor",
    price: "100$",
    rating: 10,
    reviews: 10,
  },
];

const Favorit = () => {
  const [favorites, setFavorites] = useState(favoriteItems);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Wish List</Text>
      <View style={styles.itemsContainer}>
        {favorites.map((item) => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <Image source={item.url} style={styles.itemImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.caption}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Text key={i} style={styles.star}>
                    {i < item.rating ? "★" : "☆"}
                  </Text>
                ))}
                <Text style={styles.reviews}>({item.reviews})</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  item: {
    width: "45%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gainsboro",
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  star: {
    fontSize: 14,
    color: "orange",
  },
  reviews: {
    fontSize: 14,
    color: "gray",
    marginLeft: 5,
  },
});

export default Favorit;
