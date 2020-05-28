import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const TicketReceiveScreen = ({ navigation }) => {
  return (
    <View style={styles.back}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0, justifyContent: 'space-between' }}>
        <Appbar.Action
          icon={() => <Feather name='x' color='white' size={25} />}
          onPress={() => { navigation.navigate('HomeScreen') }}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={styles.title}>Compra concluída!</Text>
            <Text style={styles.section}>Seus ingressos já estão contigo, veja eles clicando no botão abaixo. </Text>
            <Text style={styles.section}>É só apresentar eles na entrada para realizar o check-in </Text>
            <Button style={{ width: '100%', borderRadius: 5, alignSelf: 'center', marginVertical: 30 }} color='#1C35B9' mode='contained' onPress={() => navigation.navigate('TicketsScreen')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}>
              Meus ingressos
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TicketReceiveScreen

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
    fontSize: 36,
    color: '#6658ED',
    marginVertical: 10,
    textAlign: 'center'
  },
  section: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 24,
    paddingBottom: 5,
    color: '#201774',
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
