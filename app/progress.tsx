import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rider from '@/components/Rider'
import { Feather } from '@expo/vector-icons'

const progress = () => {
  return (
    <View style={{padding:10,flexDirection:'column'}}>
      <Rider/>
      <View style={{backgroundColor:'#DCE3E8', height:80, borderRadius:14, marginTop:10,  padding:10}}>
        <View style={{flexDirection:'row', gap:5}}>
            <Feather name="check-circle" size={18} style={{ marginRight: 10 }} color="black" />
            <Text style={{}}>Order Delivered</Text>
        </View>
        <View style={{alignItems:'flex-end',width:'20%'}}>
            <Text style={{}}>02:47 Pm</Text>        
        </View>
      </View>
    </View>
  )
}

export default progress

const styles = StyleSheet.create({})