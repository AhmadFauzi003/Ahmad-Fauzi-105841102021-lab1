import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const saleItems = [
  {
    url: require('../assets/products/RTX 2060.jpg'),
    caption: 'RTX 2060 GAMING 8GB',
    price: '20$',
    oldPrice: '25$',
    discount: '-15%',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/tws.jpeg'),
    caption: 'TWS',
    price: '15$',
    oldPrice: '20$',
    discount: '-15%',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/Wired Keyboard Logitech K120.jpg'),
    caption: 'Wired Keyboard Logitech K120',
    price: '100$',
    oldPrice: '120$',
    discount: '-20%',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/mouse gaming rgb.jpg'),
    caption: 'Mouse Gaming RGB',
    price: '100$',
    oldPrice: '120$',
    discount: '-20%',
    rating: 10,
    reviews: 10
  },
];

const newItems = [
  {
    url: require('../assets/products/vga.jpg'),
    caption: 'ASUS NVIDIA GeForce RTX 3080 12 GB',
    price: '250$',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/monitor.jpg'),
    caption: 'Koorui 24.5 inch FHD Gaming Monitor',
    price: '100$',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/Kabel_VGA.jpg'),
    caption: 'Kabel VGA',
    price: '10$',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/products/psu.jpg'),
    caption: 'PSU',
    price: '100$',
    rating: 10,
    reviews: 10
  },
];

const groupItems = (items, groupSize) => {
  let groupedItems = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groupedItems.push(items.slice(i, i + groupSize));
  }
  return groupedItems;
};

const Shop = () => {
  const groupedSaleItems = groupItems(saleItems, 2);
  const groupedNewItems = groupItems(newItems, 2);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/banner/banner2.jpg')}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.saleSection}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Sale</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionDescription}>
          Discover our exclusive deals on high-quality products. Don't miss out on these limited-time offers!
        </Text>
        <Slide arrows={false} easing="ease">
          {groupedSaleItems.map((group, index) => (
            <View key={index} style={styles.slide}>
              {group.map((item, subIndex) => (
                <View key={subIndex} style={styles.item}>
                  {item.discount && (
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>{item.discount}</Text>
                    </View>
                  )}
                  <Image source={item.url} style={styles.itemImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.caption}</Text>
                    <View style={styles.priceContainer}>
                      {item.oldPrice && (
                        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                      )}
                      <Text style={styles.newPrice}>{item.price}</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Text key={i} style={styles.star}>
                          {i < item.rating ? '★' : '☆'}
                        </Text>
                      ))}
                      <Text style={styles.reviews}>({item.reviews})</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </Slide>
      </View>
      <View style={styles.newSection}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>New</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionDescription}>
          Check out our latest arrivals and be the first to get your hands on the newest products on the market!
        </Text>
        <Slide arrows={false} easing="ease">
          {groupedNewItems.map((group, index) => (
            <View key={index} style={styles.slide}>
              {group.map((item, subIndex) => (
                <View key={subIndex} style={styles.item}>
                  <Image source={item.url} style={styles.itemImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.caption}</Text>
                    <Text style={styles.newPrice}>{item.price}</Text>
                    <View style={styles.ratingContainer}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Text key={i} style={styles.star}>
                          {i < item.rating ? '★' : '☆'}
                        </Text>
                      ))}
                      <Text style={styles.reviews}>({item.reviews})</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </Slide>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 150,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  saleSection: {
    padding: 20,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color: 'dimgray',
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  newPrice: {
    fontSize: 16,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    fontSize: 14,
    color: 'orange',
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
  },
  newSection: {
    padding: 20,
  },
});

export default Shop;
