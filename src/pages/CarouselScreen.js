import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-paper'

const CarouselScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#6658ED' }}>
      <Image source={require('../assets/images/header-logo.png')} resizeMode='contain' style={{ width: 200, height: 100, alignSelf: 'center' }} />
      <Swiper containerStyle={{ flex: 1 }} dotColor='rgba(255,255,255,0.4)' activeDotColor='white'>
        <View style={styles.slide}>
          <Text style={styles.text}>Descubra os melhore eventos</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Compre com segurança</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Divulgue entre amigos</Text>
        </View>
      </Swiper>
      <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button
          style={{ width: 200, borderRadius: 5 }}
          color='#FFF' icon='log-in' mode='contained' onPress={() => navigation.navigate('SignInScreen')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#6658ED' }}
        >
          entrar
        </Button>
        <Button
          style={{ width: 200, borderColor: 'white', borderWidth: 3, borderRadius: 5 }}
          color='white' mode='outlined'
          onPress={() => navigation.navigate('SignUpMethodScreen')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
        >
          cadastrar
        </Button>
      </View>
    </View>
  )
}

export default CarouselScreen

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  text: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'left'
  }
})
