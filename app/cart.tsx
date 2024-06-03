import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CartItems from '@/components/CartItems';
import { router } from 'expo-router';

const Cart = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <CartItems />
            </View>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push('/checkout')}>
                <Feather name="check-circle" size={18} style={{ marginRight: 10 }} color="white" />
                <Text style={styles.checkoutButtonText}>Checkout Items</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Cart;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, // Ensure the SafeAreaView takes up the full screen
        backgroundColor: '#F4F4F4',
    },
    container: {
        flex: 1, // Allow the container to grow and take up available space
    },
    checkoutButton: {
        flexDirection: 'row',
        width: '70%',
        marginTop: 16,
        backgroundColor: 'black',
        padding: 16,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16, // Ensure there is some space at the bottom
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
