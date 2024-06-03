import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import data from '@/data/food.json';
import { ItemType } from '@/types/itemTypes';
import { Link } from 'expo-router';

const deliveryCost = 100; // Assuming the delivery cost is fixed

const CartItems = () => {
  const [cart, setCart] = useState(data.map(item => ({ ...item, quantity: 1 })));

  const handleIncreaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const renderItem = ({ item }: { item: ItemType }) => (
    <Link href={`/listing/${item.id}`} asChild>
        <View style={{backgroundColor:'#F4F4F4'}}>
            <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>KES {item.price}</Text>
                <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                    <Feather name="minus-circle" size={18} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                    <Feather name="plus-circle" size={18} color="black" />
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    </Link>
  );

  return (
    <>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      
    </>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 'auto',
    width:'100%',
    margin:5,
    marginBottom: 10,
    padding: 10,
    backgroundColor:'#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    borderRadius: 10,
    width: '40%',
    height: '100%',
    padding: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantity: {
    marginHorizontal: 16,
    fontSize: 14,
  },
  
});
