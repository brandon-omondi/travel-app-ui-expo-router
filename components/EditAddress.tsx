import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import MapView, { Marker } from 'react-native-maps'

const EditAddress = () => {
  return (
    <View style={styles.addr}>
      <View style={{
        width:'95%',
        height:193,
        // backgroundColor: '#000000',
        borderRadius:14,
      }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -1.286389,
            longitude: 36.817223,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: -1.319995,
              longitude: 36.809079,
            }}
            title="Qwetu Wilsonview"
            description="Accommodation"
          />
                    
        </MapView>
      </View>
      <View 
        style={styles.pin}>
        <MaterialIcons name="my-location" size={24} color="black" />
        <Text>Pin Location</Text>
      </View>
    </View>
  )
}

export default EditAddress

const styles = StyleSheet.create({

    pin: {
        position: "absolute",
        top: 170,
        left: "30%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.black,
        flexDirection:"row",
        backgroundColor: Colors.deltime,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:8,
        width:130,
      },
      pinTxt:{
        fontSize: 11,
        fontWeight: "600",
        color: Colors.black,
        
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        borderRadius:14,
    },
      addr:{
        marginBottom:40,
        
      },
})