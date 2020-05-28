import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'

const TicketCard = ({ navigation, ticket }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, height: 'auto' }}>
        <Text style={styles.description}>nome</Text>
        <Text style={styles.title}>Fernando Gabriel</Text>
        <Text style={styles.description}>ticket</Text>
        <Text style={styles.title}>{ticket.name}</Text>
        <Text style={styles.description}>evento</Text>
        <Text style={styles.title}>{ticket.eventId.eventName}</Text>
        <Text style={styles.description}>datas</Text>
        <Text style={styles.title}>{ticket.eventId.eventDate}</Text>
        <Text style={styles.description}>código</Text>
        <Text style={styles.title}>{ticket._id}</Text>
        <View style={{ alignSelf: 'center', margin: 20 }}>
          <QRCode
            size={150}
            value={ticket._id}
          />
        </View>
        <Button
          style={{ width: 'auto', borderColor: '#1C35B9', borderWidth: 3, borderRadius: 5 }}
          color='#1C35B9' mode='outlined'
          onPress={() => console.log(ticket)}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#1C35B9' }}
        >
          salvar na galeria
        </Button>
      </View>
    </View>
  )
}

export default TicketCard

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#6658ED'
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 30,
    overflow: 'hidden',
    elevation: 10,
    height: 'auto',
    paddingBottom: 30,
    marginBottom: 25
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
