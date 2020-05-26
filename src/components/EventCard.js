import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

const EventCard = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => navigation.navigate('EventDetailScreen')}>
      <Image source={require('../assets/images/photo1.png')} resizeMode='cover' style={{ width: '100%', height: '70%', backgroundColor: 'red' }} />
      <View style={{ marginLeft: 20, marginTop: 5 }}>
        <Text style={styles.title}>Nome do Evento </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.detail}>Barão Geraldo</Text>
          <Text style={[styles.detail, { marginLeft: 10 }]}>Data 07/12/2020</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default EventCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
    height: 240
  },
  title: {
    fontFamily: 'Comfortaa-Regular',
    color: '#201774',
    fontSize: 16
  },
  detail: {
    fontFamily: 'Comfortaa-Regular',
    color: '#201774',
    fontSize: 14
  }
})
