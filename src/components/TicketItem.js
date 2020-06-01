import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Material from 'react-native-vector-icons/MaterialIcons'

const TicketItem = ({ navigation, data }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('TicketDetailScreen', { data }) }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{data.eventId.eventName}</Text>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <Image source={require('../assets/images/photo1.png')} resizeMode='cover' style={{ width: 150, height: '100%', backgroundColor: 'red' }} />
        <Material name='confirmation-number' color='#201774' size={30} />
      </View>
    </TouchableOpacity>
  )
}

export default TicketItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontFamily: 'Comfortaa-Bold',
    color: '#201774'
  }
})
