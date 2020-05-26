import React, { useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import EventCard from '../components/EventCard'
import { Searchbar } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const cards = [1, 2, 3, 4, 5]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Searchbar
          placeholder='Search'
          onChangeText={(t) => setSearch(t)}
          value={search}
          style={{ backgroundColor: 'transparent', elevation: 0, paddingLeft: 10 }}
          icon={() => <Feather name='search' size={30} color='#6658ED' />}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={cards}
          keyExtractor={key => key}
          renderItem={() => <EventCard navigation={navigation} />}
          style={{ paddingHorizontal: 10 }}
        />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
