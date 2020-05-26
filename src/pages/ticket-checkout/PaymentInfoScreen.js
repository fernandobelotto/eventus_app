import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Ticket from '../../components/Ticket'

const PaymentInfoScreen = ({ navigation }) => {
  const data = [
    { id: 'asdf', name: 'vip', price: 25.50 },
    { id: 'asdft', name: 'normal', price: 10.50 }
  ]
  const [cardNumber, setCardNumber] = useState(0)
  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action icon={() => <Feather name='arrow-left' color='white' size={25} />} onPress={() => { navigation.goBack() }} />
      </Appbar.Header>
      <ScrollView>

        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={styles.title}>Nome do evento</Text>
            <Text style={styles.section}>pagamento</Text>
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='número do cartão'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='número do cartão'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='número do cartão'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='número do cartão'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <Text style={styles.section}>endereço</Text>
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='rua e número'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='cidade'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}
              mode='outlined'
              label='estado'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <TextInput
              style={{ width: '100%', height: 50, backgroundColor: 'white', paddingHorizontal: 15 }}
              mode='outlined'
              label='cep'
              value={cardNumber}
              onChangeText={email => setCardNumber(email)}
            />
            <Text style={styles.detail}>Eu aceito os termos de serviço e confirmo ter lido a politica de privacidade.</Text>
            <Button
              style={{ width: '100%', borderRadius: 5, alignSelf: 'center' }} color='#1C35B9' mode='contained'
              onPress={() => navigation.navigate('TicketReceiveScreen')}
              labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
            >
              confirmar pagamento
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PaymentInfoScreen

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
    elevation: 10,
    paddingBottom: 30
  },
  title: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    color: '#201774',
    marginVertical: 10,
    textAlign: 'center'
  },
  section: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 18,
    paddingBottom: 5,
    color: '#201774',
    marginTop: 10,
    borderBottomColor: '#6658ED',
    borderBottomWidth: 2,
    alignSelf: 'flex-start'
  },
  detail: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
    paddingBottom: 5,
    color: '#201774',
    marginHorizontal: 15,
    marginVertical: 10,
    alignSelf: 'flex-start'
  }
})
