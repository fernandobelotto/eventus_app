import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Appbar } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import TicketItem from '../components/TicketItem'

const TicketsScreen = ({ navigation }) => {
  const tickets = [
    { id: 'asdf', name: 'vip', price: 25.50, eventName: 'palestra', eventData: '20/04/2021' },
    { id: 'asdft', name: 'normal', price: 10.50, eventName: 'congresso', eventData: '20/02/2020' }
  ]
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Appbar.Content
          title='Meus Ingressos' titleStyle={{ fontFamily: 'Comfortaa-Bold', color: '#1C35B9', fontSize: 26 }}
          style={{ alignItems: 'center' }}
        />
      </Appbar.Header>
      <FlatList
        data={tickets}
        keyExtractor={(i) => i}
        renderItem={({ item }) => { return (<TicketItem navigation={navigation} data={item} />) }}
      />
    </View>
  )
}

export default TicketsScreen
