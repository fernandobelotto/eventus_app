import React, { useState, useEffect } from 'react'
import { FlatList, View, Text } from 'react-native'
import EventCard from '../components/EventCard'
import { Searchbar } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler'
import { getApi } from '../api/fetch'

const HomeScreen = ({ navigation }) => {
  const [cards, setcards] = useState([])
  useEffect(
    getMoreData
    , [])
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)

  async function getMoreData () {
    setRefresh(true)
    const response = await getApi('/event/all')
    setcards(response)
    setRefresh(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder='Search'
        onChangeText={(t) => setSearch(t)}
        value={search}
        style={{ backgroundColor: 'transparent', elevation: 0, paddingLeft: 10 }}
        icon={() => <Feather name='search' size={30} color='#6658ED' />}
      />
      <FlatList
        refreshing={refresh}
        onRefresh={getMoreData}
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={key => key}
        renderItem={({ item }) => <EventCard data={item} navigation={navigation} />}
        style={{ paddingHorizontal: 10 }}
      />
    </View>
  )
}

export default HomeScreen
