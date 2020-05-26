import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg'

const TicketCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, height: 'auto' }}>
        <Text style={styles.description}>nome</Text>
        <Text style={styles.title}>Fernando Gabriel</Text>
        <Text style={styles.description}>ticket</Text>
        <Text style={styles.title}>entrada vip</Text>
        <Text style={styles.description}>evento</Text>
        <Text style={styles.title}>palestra sobre react native</Text>
        <Text style={styles.description}>data</Text>
        <Text style={styles.title}>seg, 25 de maio | 17:00 - 19:00</Text>
        <Text style={styles.description}>código</Text>
        <Text style={styles.title}>1234068406</Text>
        <View style={{ alignSelf: 'center', margin: 20 }}>
          <QRCode
            size={150}
            value='1234068406'
          />
        </View>
        <Button style={{ width: 'auto', borderColor: '#1C35B9', borderWidth: 3, borderRadius: 5 }} color='#1C35B9' mode='outlined' onPress={() => console.log('Pressed')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#1C35B9' }}>
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
