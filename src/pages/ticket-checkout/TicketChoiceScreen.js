import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Ticket from '../../components/Ticket'

const TicketChoiceScreen = ({ navigation }) => {
  const data = [
    { id: 'asdf', name: 'vip', price: 25.50 },
    { id: 'asdft', name: 'normal', price: 10.50 }
  ]

  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action icon={() => <Feather name='arrow-left' color='white' size={25} />} onPress={() => { navigation.goBack() }} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={styles.title}>Nome do evento</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Ticket name={item.name} id={item.id} price={item.price} />}
            style={{ height: '75%' }}
          />
          <Text style={styles.info}>total 21,00</Text>
          <Button
            style={{ width: 250, borderRadius: 5, alignSelf: 'center' }}
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
    flex: 1,
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
