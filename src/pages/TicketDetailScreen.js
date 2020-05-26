import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import TicketCard from '../components/TicketCard'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const TicketDetailScreen = ({ navigation }) => {
  const tickets = [
    { id: 'asdf', name: 'vip', price: 25.50, eventName: 'palestra', eventData: '20/04/2021' },
    { id: 'asdf', name: 'vip', price: 25.50, eventName: 'palestra', eventData: '20/04/2021' },
    { id: 'asdf', name: 'vip', price: 25.50, eventName: 'palestra', eventData: '20/04/2021' },
    { id: 'asdft', name: 'normal', price: 10.50, eventName: 'congresso', eventData: '20/02/2020' }
  ]
  const [active, setActive] = useState(0)
  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action icon={() => <Feather name='arrow-left' color='white' size={25} />} onPress={() => { navigation.goBack() }} />
      </Appbar.Header>
      <ScrollView>
        <Carousel
          data={tickets}
          renderItem={() => <TicketCard />}
          itemWidth={400}
          sliderWidth={400}
          containerCustomStyle={{ height: 'auto' }}
          onSnapToItem={(index) => setActive(index)}
        />
      </ScrollView>
      <Pagination
        dotsLength={tickets.length}
        activeDotIndex={active}
        containerStyle={{ height: 'auto', backgroundColor: 'tranparent', margin: 5, paddingVertical: 0, zIndex: 0 }}
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
    fontSize: 22,
    color: '#201774'
  },
  description: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 18,
    color: '#201774',
    marginTop: 10
  },
  info: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 18,
    color: '#201774',
    marginLeft: 10
  }
})
