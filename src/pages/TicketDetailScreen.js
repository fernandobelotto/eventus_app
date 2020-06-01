import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import TicketCard from '../components/TicketCard'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Context } from '../context'
import { getApi } from '../api/fetch'

const TicketDetailScreen = ({ navigation }) => {
  const { user } = useContext(Context)
  const { state: userState } = user

  const [tickets, setTickets] = useState([])
  useEffect(async () => {
    const { tickets } = await getApi(`/ticket/${userState.id}`)
    setTickets(tickets)
  }, [])

  const [active, setActive] = useState(0)
  return (
    <View style={styles.back}>
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          justifyContent: 'space-between'
        }}
      >
        <Appbar.Action
          icon={() => <Feather name='arrow-left' color='white' size={25} />}
          onPress={() => { navigation.goBack() }}
        />
      </Appbar.Header>
      <ScrollView>
        <Carousel
          data={tickets}
          renderItem={({ item }) => <TicketCard ticket={item} />}
          itemWidth={400}
          sliderWidth={400}
          containerCustomStyle={{ height: 'auto' }}
          onSnapToItem={(index) => setActive(index)}
        />
      </ScrollView>
      <Pagination
        dotsLength={tickets.length}
        activeDotIndex={active}
        containerStyle={{
          height: 'auto',
          backgroundColor: 'tranparent',
          margin: 5,
          paddingVertical: 0
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          margin: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default TicketDetailScreen

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#6658ED'
  }
})
