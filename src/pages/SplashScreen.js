import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('CarouselScreen'), 1000)
  })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={{ width: 200 }} />
    </View>
  )
}

export default SplashScreen
