import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define a type for the delivery options
type PaymentOption = {
  id: string;
  label: string;
  logo: string;
};

const paymentOptions: PaymentOption[] = [
  { id: '1', label: 'Mpesa', logo: 'https://i.ibb.co/4pd5TPh/640px-M-pesa-logo-removebg-preview.png' },
  { id: '2', label: 'Cash', logo: 'https://i.ibb.co/mSXWXvd/brand-designer-clothing-logo-cash-on-delivery-removebg-preview.png' },
  { id: '3', label: 'Stribe Wallet', logo: 'https://i.ibb.co/7G9qQBw/tr-removebg-preview.png' },
];

const Payments = () => {
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0].id);

  const renderItem = ({ item }: { item: PaymentOption }) => (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: selectedOption === item.id ? 'black' : '#D5DEE7' },
      ]}
      onPress={() => setSelectedOption(item.id)}
    >
      {/* Adjust the size of the image and its container */}
      <View style={styles.logoContainer}>
        <Image source={{ uri: item.logo }} style={styles.logo} />
      </View>
      <Text style={[
        styles.buttonText,
        { color: selectedOption === item.id ? 'white' : 'black' }
      ]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={paymentOptions}
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
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
  },
  button: {
    // flexDirection:'column', // Ensure that the button can contain both image and text horizontally
    padding: 6,
    width:100,
    borderRadius: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginTop:3,
    fontSize: 11,
    // marginLeft: 4, // Add some spacing between the image and text
  },
  logoContainer: {
    width: 40, // Set a fixed width for the logo container
    height: 40, // Set a fixed height for the logo container
    marginRight: 4, // Add some spacing between the logo and text
  },
  logo: {
    width: '100%', // Ensure the logo takes up the entire space of its container
    height: '100%', // Ensure the logo takes up the entire space of its container
    resizeMode: 'contain', // Adjust the resizeMode to fit the image within its container
  },
});

export default Payments;
