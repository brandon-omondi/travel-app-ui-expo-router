import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category: string;
};

const { width } = Dimensions.get("window");

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Update Listing');
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [category]);

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>

          {/* card */}
          <View style={styles.item}>

            {/* image */}
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
            <Text style={styles.bookmarkTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.time}
            </Text>
            </View>
            <View style={styles.discount}>
            <Text style={styles.discountTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.discount}
            </Text>
            </View>

            {/* Card Text */}
            <View>
            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>KES {item.price}</Text>
            </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: '95%',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 150,
    left: 30,
    backgroundColor: Colors.deltime,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.deltime,
  },
  bookmarkTxt:{
    fontSize: 11,
    fontWeight: "600",
    color: Colors.black,
    
  },
  discount: {
    position: "absolute",
    top: 150,
    right: 30,
    backgroundColor: Colors.pill,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.deltime,
  },
  discountTxt:{
    fontSize: 11,
    fontWeight: "600",
    color: Colors.red,
    
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
