import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define a type for the delivery options
type DeliveryOption = {
    id: string;
    label: string;
  };

const deliveryOptions = [
  { id: '1', label: 'Leave at Doorstep' },
  { id: '2', label: 'In-Person Handoff' },
  { id: '3', label: 'Meet Outside House' },
];

const DeliveryDetails = () => {
  const [selectedOption, setSelectedOption] = useState(deliveryOptions[0].id);

  const renderItem = ({ item }: { item: DeliveryOption }) => (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: selectedOption === item.id ? 'black' : '#D5DEE7' },
      ]}
      onPress={() => setSelectedOption(item.id)}
    >
      <Text style={[
        styles.buttonText,
        { color: selectedOption === item.id ? 'white' : 'black' }
      ]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={deliveryOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,

  },
  list: {
    flexDirection: 'row',
  },
  button: {
    padding: 8,
    borderRadius: 50,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default DeliveryDetails;
