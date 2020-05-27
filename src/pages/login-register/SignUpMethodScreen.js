import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import googleLogin from '../../hooks/googleLogin'
import signUp from '../../hooks/signUp'

// import signUp from '../../hooks/signUp'

const SignUpMethodScreen = ({ navigation }) => {
  async function trySignUp (method) {
    switch (method) {
      case 'google': {
        const { email, name } = await googleLogin()
        console.log('name :>> ', name)
        console.log('email :>> ', email)
        const checkGoogle = await signUp(email, name, 'google', 'undefined')
        console.log('checkGoogle :>> ', checkGoogle)
        if (checkGoogle) {
          navigation.navigate('BottomTab')
        } else {
          console.log('errorrr')
        } break
      }
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Image
        source={require('../../assets/images/header-logo-negative.png')}
        resizeMode='contain'
        style={{ flex: 0.15, height: 100, width: 200, alignSelf: 'center' }}
      />

      <View style={{ flex: 0.2, justifyContent: 'space-evenly' }}>

        <Button
          icon={({ size, color }) => (
            <Image
              source={require('../../assets/images/google.png')}
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
          )} style={{ width: 300, borderRadius: 5 }} color='white' mode='contained'
          onPress={() => trySignUp('google')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#4285F4' }}
        >
          cadastrar com google
        </Button>

        <Button
          icon={({ size, color }) => (
            <Image
              source={require('../../assets/images/facebook.png')}
              style={{ width: 20, height: 20 }}
            />
          )} style={{ width: 300, borderRadius: 5 }} color='#1877F2' mode='contained' onPress={() => navigation.navigate('SignUpMethodScreen')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
        >
          cadastrar com facebook
        </Button>
        <Button style={{ width: 300, borderRadius: 5 }} color='#1C35B9' mode='contained' onPress={() => navigation.navigate('SignUpScreen')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}>
          cadastrar com email
        </Button>
      </View>
      <View style={{ flex: 0.088, justifyContent: 'space-evenly' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.textButton}> Já possue conta? entre aqui</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default SignUpMethodScreen

const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    color: '#1C35B9'
  }
})
