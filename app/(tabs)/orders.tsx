import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import Colors from '@/constants/Colors'
import RiderCard from '@/components/RiderCard'

const orders = () => {
  return (
    <Animated.ScrollView>
      <RiderCard/>
    </Animated.ScrollView>
  )
}

export default orders

const styles = StyleSheet.create({})