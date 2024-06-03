import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EditAddress from '@/components/EditAddress'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'
import DeliveryDetails from '@/components/DeliveryDetails'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

const Page = () => {
  return (
    <Animated.ScrollView>
    <View style={styles.container}>
      <Text style={{marginBottom:10, fontSize:24,fontWeight:600}}>Edit Address</Text>
        <EditAddress/>
      <View style={styles.contain}>
        <Text style={styles.label}>Apt / Suite / Floor</Text>
        <TextInput placeholder="Type something here" placeholderTextColor="#B3BFCB" style={styles.input} />
      </View>
      <View style={styles.contain}>
        <Text style={styles.label}>Business / Building Name</Text>
        <TextInput placeholder="Type something here" placeholderTextColor="#B3BFCB" style={styles.input} />
      </View>
      <Text style={{marginBottom:10, fontSize:24,fontWeight:600}}>Delivery Details</Text>
      {/* Delivery Details - Pills */}
      <DeliveryDetails/>
      <View style={styles.instructions}>
        <Text style={styles.label}>Add Instructions</Text>
        <TextInput placeholder="Type something here" placeholderTextColor="#B3BFCB" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Feather name="check-circle" size={18} style={{marginRight:10}} color="white" />
        <Text style={styles.saveButtonText}>Save and Use</Text>
      </TouchableOpacity>
      

    </View>
    </Animated.ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
  },
  contain: {
    marginBottom: 16,
    width:'95%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  instructions:{
    fontSize: 16,
    width:'95%',
    marginBottom: 20,

  },
  saveButton: {
    flexDirection:'row',
    width: '95%',
    marginTop: 16,
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})