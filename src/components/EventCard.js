import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

const EventCard = ({ navigation, data }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => navigation.navigate('EventDetailScreen', { data })}>
      <Image source={require('../assets/images/photo1.png')} resizeMode='cover' style={{ width: '100%', height: '70%', backgroundColor: 'red' }} />
      <View style={{ marginLeft: 20, marginTop: 5 }}>
        <Text style={styles.title}>{data.eventName}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.detail}>{data.eventPlace}</Text>
          <Text style={[styles.detail, { marginLeft: 10 }]}>{data.eventDate}</Text>
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
