import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-paper'

const CarouselScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#6658ED' }}>
      <Image source={require('../assets/images/header-logo.png')} resizeMode='contain' style={{ width: 200, height: 100, alignSelf: 'center' }} />
      <Swiper containerStyle={{ flex: 1 }}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Bem Vindo</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Ao Melhor</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>App de Eventos!</Text>
        </View>
      </Swiper>
      <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button style={{ width: 200, borderRadius: 5 }} color='white' icon='log-in' mode='contained' onPress={() => navigation.navigate('SignInScreen')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#6658ED' }}>
          entrar
        </Button>
        <Button style={{ width: 200, borderColor: 'white', borderWidth: 3, borderRadius: 5 }} color='white' mode='outlined' onPress={() => console.log('Pressed')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}>
          cadastrar
        </Button>
      </View>
    </View>
  )
}

export default CarouselScreen

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
