import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Material from 'react-native-vector-icons/MaterialIcons'
import { IconButton } from 'react-native-paper'

const Ticket = ({ id, name, price }) => {
  const [pressed, setPressed] = useState(false)
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>R${price}</Text>
          <IconButton
            icon={() => <Material name='confirmation-number' color={pressed ? 'blue' : 'grey'} size={30} />}
            size={20}
            onPress={() => setPressed(!pressed)}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Ticket

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontFamily: 'Comfortaa-Bold',
    color: '#201774',
    fontSize: 16
  }
})
