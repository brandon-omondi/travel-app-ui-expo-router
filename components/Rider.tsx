import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Rider = () => {
  return (
    <View style={styles.Topcontainer}>
            <View style={styles.riderdetails}>
                <View style={styles.imagecontainer}>
                    <Image source={{uri:'https://i.ibb.co/VvXYqz0/132219227-moses-976-2.jpg'}} style={styles.profilePicture} />
                </View>
                <View style={{marginLeft:10, gap:10}}>
                    <Text style={{color:'white'}}>Clive Wafula</Text>                
                    <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
                        <Feather name="star" size={14} color="white" />
                        <Text style={{color:'white'}}>4.8</Text>
                    </View>
                </View>                
            </View>
            <View style={{flexDirection:'row', gap:3, alignItems:'flex-start'}}>
                <Feather name="watch" size={14} color="white" style={{marginRight:5}}/>
                <Text style={{color:'white'}}>5 Mins Away</Text>
            </View>
        </View>
  )
}

export default Rider

const styles = StyleSheet.create({
    Topcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        height:'40%',
        backgroundColor:'#000',
        borderTopLeftRadius:14,
        borderTopRightRadius:14,

    },
    riderdetails:{
        flexDirection:'row',
        marginLeft: 1,

    },
    imagecontainer: {
        width: 46,
        height: 46,
        borderRadius: 23, // Half of the width and height to make it fully rounded
        overflow: 'hidden', // Ensures the image is clipped to the rounded border
    },
    profilePicture: {
        width: '100%', // Ensures the image takes up the entire width of the container
        height: '100%', // Ensures the image takes up the entire height of the container
        resizeMode: 'cover', // Adjusts the image to cover the entire container
      },
})