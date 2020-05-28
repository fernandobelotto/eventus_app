import React, { useEffect, useState, useContext } from 'react'
import { View, FlatList } from 'react-native'
import { Appbar } from 'react-native-paper'

import { getApi } from '../api/fetch'
import { Context } from '../context'
import TicketItem from '../components/TicketItem'

const TicketsScreen = ({ navigation }) => {
  const { user } = useContext(Context)
  const { state: userState } = user

  const [tickets, setTickets] = useState([])
  useEffect(async () => {
    const { tickets } = await getApi(`/ticket/${userState.id}`)
    setTickets(tickets)
  }, [])

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
