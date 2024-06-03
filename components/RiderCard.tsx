import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Rider from './Rider'

const RiderCard = () => {
  return (
    <View style={{padding:20, backgroundColor:Colors.bgColor}}>
      <View style={{alignSelf:'center', backgroundColor:Colors.black, width:'90%', height:200, borderRadius:14}}>
        
        <Rider/>
        <View style={{height:'60%', backgroundColor:'#fff', borderBottomStartRadius:14,borderBottomEndRadius:14}}>
            <View style={styles.status}>
                <View>
                    <Text>Status</Text>
                    <Text style={{color:'green', fontWeight:700}}>Driver is enroute</Text>
                </View>
                <View style={{backgroundColor:Colors.black, width:40, height:40, alignItems:'center', justifyContent:'center', borderRadius:50}}>
                    <Ionicons name="call-sharp" size={24} color="white" />
                </View>
            </View>
            <View style={styles.progress}>
                <Text>Cancel</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/progress')}>
                    <Text style={styles.buttonText}>View Progress</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default RiderCard

const styles = StyleSheet.create({
    Bottomcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
    status:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginBottom:10,
        alignItems:'center',
    },
    progress:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',

    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
      },
    buttonText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    
})