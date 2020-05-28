import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialIcons'

const EventDetailScreen = ({ navigation, route }) => {
  const { data } = route.params
  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action icon={() => <Feather name='arrow-left' color='white' size={25} />} onPress={() => { navigation.goBack() }} />
        <Appbar.Action icon={() => <Feather name='share-2' color='white' size={25} />} onPress={() => { }} />
      </Appbar.Header>
      <View style={styles.container}>
        <Image source={require('../../assets/images/photo1.png')} resizeMode='cover' style={{ width: '100%', height: 200, backgroundColor: 'red' }} />
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.title}>{data.eventName}</Text>
          <Text style={styles.description}>{data.eventDescription}</Text>
          <View style={styles.iconRow}>
            <Material name='room' color='#6658ED' size={30} />
            <Text style={styles.info}>{data.eventPlace}</Text>
          </View>
          <View style={styles.iconRow}>
            <Feather name='calendar' color='#6658ED' size={30} />
            <Text style={styles.info}>{data.eventDate}</Text>
          </View>
          <Button
            style={{ marginTop: 40, width: 250, borderRadius: 5, alignSelf: 'center' }}
            color='#1C35B9' mode='contained'
            labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
            onPress={() => navigation.navigate('TicketChoiceScreen', { data })}
          >
            ingressos
          </Button>
        </View>
      </View>
    </View>
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#6658ED'
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 30,
    overflow: 'hidden',
    elevation: 10,
    height: 'auto',
    paddingBottom: 30
  },
  title: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    color: '#201774',
    marginTop: 10
  },
  description: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    color: '#201774',
    marginTop: 10
  },
  info: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 18,
    color: '#201774',
    marginLeft: 10
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-start'
  }
})
