import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import facebookLogin from '../../hooks/facebookLogin'
import googleLogin from '../../hooks/googleLogin'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
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
          )} style={{ width: 300, borderRadius: 5 }}
          color='white' mode='contained'
          onPress={() => console.log('opa')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#4285F4' }}
        >
          Entrar com google
        </Button>

        <Button
          icon={({ size, color }) => (
            <Image
              source={require('../../assets/images/facebook.png')}
              style={{ width: 20, height: 20 }}
            />
          )} style={{ width: 300, borderRadius: 5 }}
          color='#1877F2' mode='contained'
          onPress={() => facebookLogin()}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
        >
          Entrar com facebook
        </Button>
      </View>

      <View style={{ flex: 0.25, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='email'
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='senha'
          value={pass}
          onChangeText={email => setPass(email)}
        />

        <Button style={{ width: 300, borderRadius: 5 }} color='#1C35B9' mode='contained' onPress={() => navigation.navigate('BottomTab')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}>
          entrar
        </Button>
      </View>

      <View style={{ flex: 0.1, justifyContent: 'space-evenly' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpMethodScreen')}>
          <Text style={styles.textButton}> Não possue conta? cadastre aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textButton}>Esqueceu a senha? recupere aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    color: '#1C35B9'
  }
})
