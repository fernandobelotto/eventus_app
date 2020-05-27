import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import facebookLogin from '../../hooks/facebookLogin'
import googleLogin from '../../hooks/googleLogin'
import login from '../../hooks/login'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [snack, setSnack] = useState(false)
  const [pass, setPass] = useState('')

  async function tryLogin (method) {
    switch (method) {
      case 'email': {
        const checkedLogin = await login(email, pass, 'email')
        if (checkedLogin) {
          navigation.navigate('BottomTab')
        } else {
          setSnack(true)
        } break
      }
      case 'gmail': {
        const { email } = await googleLogin()
        console.log(email)
        const checkGoogle = await login(email, 'undefined', 'google')
        if (checkGoogle) {
          navigation.navigate('BottomTab')
        } else {
          setSnack(true)
        } break
      }
    }
  }

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
          onPress={() => tryLogin('gmail')}
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

      <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='email'
          value={email}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCompleteType='off'
          autoCorrect={false}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='senha'
          value={pass}
          secureTextEntry
          onChangeText={email => setPass(email)}
        />

        <Button
          style={{ width: 300, borderRadius: 5 }}
          color='#1C35B9' mode='contained'
          onPress={() => tryLogin('email')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
        >
          entrar
        </Button>
      </View>
      <Snackbar
        style={{ backgroundColor: 'red', borderRadius: 20 }}
        duration={2500}
        visible={snack}
        onDismiss={() => setSnack(!snack)}
      >
        email ou senha inválidos
      </Snackbar>
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
