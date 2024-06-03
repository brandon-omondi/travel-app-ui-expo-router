import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Payments from '@/components/Payments';

const Checkout = () => (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 600, marginBottom: 40 }}>Setup Payment Option</Text>
            <View>
                <View style={styles.contain}>
                    <Text style={styles.label}>Card Number</Text>
                    <TextInput placeholder="0000 0000 0000 0000" placeholderTextColor="#B3BFCB" style={styles.longinput} />
                </View>
                {/* Two Columns */}
                <View style={{ flexDirection: 'row', alignContent:'flex-start', gap:40 }}>
                    <View style={styles.shortcontain}>
                        <Text style={styles.label}>Expiry Date</Text>
                        <TextInput placeholder="MM/YY" placeholderTextColor="#B3BFCB" style={styles.shortinput} />
                    </View>
                    <View style={styles.shortcontain}>
                        <Text style={styles.label}>CVV</Text>
                        <TextInput placeholder="123" placeholderTextColor="#B3BFCB" style={styles.shortinput} />
                    </View>
                </View>
            </View>
            <Text style={{ marginTop: 40, marginBottom: 20 }}>OR</Text>
            <Payments />
            <View style={{gap:10, marginTop:40, alignSelf:'center'}}>
                <Text style={{color:'#999'}}>Amount Due .................................KES 1,500.00</Text>
                <Text style={{color:'#999'}}>16% VAT:.......................................KES   280.00</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.saveButton}>
            <Feather name="check-circle" size={18} style={{ marginRight: 10 }} color="white" />
            <Text style={styles.saveButtonText}>Confirm</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

export default Checkout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, // Ensure the SafeAreaView takes up the full screen
        backgroundColor: '#F4F4F4',
    },
    container: {
        flex: 1, // Allow the container to grow and take up available space
        padding:20,
    },
    contain: {
        marginBottom: 50,
        width:'70%',
    
      },
      shortcontain:{
        marginBottom: 16,
        width:'30%',
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      longinput: {
        backgroundColor:'#F4F4F4',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
      },
      shortinput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
      },
  saveButton: {
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
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
