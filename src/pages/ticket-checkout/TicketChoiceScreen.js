import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Ticket from '../../components/Ticket'

const TicketChoiceScreen = ({ navigation, route }) => {
  const { data } = route.params
  const [selected, setSelected] = useState(new Map())

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected)
      newSelected.set(id, !selected.get(id))
      setSelected(newSelected)
    },
    [selected]
  )

  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action icon={() => <Feather name='arrow-left' color='white' size={25} />} onPress={() => { navigation.goBack() }} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.title}>{data.eventName}</Text>
          <FlatList
            extraData={selected}
            data={data.tickets}
            renderItem={({ item }) => {
              return (
                <Ticket selected={!!selected.get(item._id)} onSelect={onSelect} name={item.name} id={item._id} price={item.price} style={{ height: '75%' }} />
              )
            }}
          />
          {/* <Text style={styles.info}>total 21,00</Text> */}
          <Button
            style={{ width: 250, borderRadius: 5, alignSelf: 'center', marginVertical: 30 }}
            color='#1C35B9' mode='contained'
            onPress={() => navigation.navigate('PaymentInfoScreen')}
            labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
          >
            Continuar
          </Button>
        </View>
      </View>
    </View>
  )
}

export default TicketChoiceScreen

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#6658ED'
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 30,
    height: 'auto',
    overflow: 'hidden',
    elevation: 10
  },
  title: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    color: '#201774',
    marginVertical: 10,
    textAlign: 'center'
  },
  description: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    color: '#201774',
    marginTop: 10
  },
  info: {
    fontFamily: 'Comfortaa-Regular',
    alignSelf: 'center',
    fontSize: 18,
    color: '#201774',
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#6658ED',
    margin: 10
  }
})
