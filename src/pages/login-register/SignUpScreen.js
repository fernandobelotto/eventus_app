import React, { useState, useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, Button, Snackbar } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import signUp from '../../hooks/signUp'
import { Context } from '../../context'

const SignUpScreen = ({ navigation }) => {
  const { user } = useContext(Context)
  const { dispatch: userDispatch } = user

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [snack, setSnack] = useState(false)

  async function trySignUp (method) {
    switch (method) {
      case 'email': {
        const response = await signUp(email, name, 'email', pass)
        if (response) {
          await userDispatch({ type: 'add_id', payload: { id: response.userId } })
          await storeData(response.userId, response.name)
          navigation.navigate('BottomTab')
        } else {
          setSnack(true)
        } break
      }
      case 'gmail': {
        const { email, name } = await googleLogin()
        const response = await signUp(email, name, 'google')
        if (response) {
          await userDispatch({ type: 'add_id', payload: { id: response.userId } })
          await storeData(response.userId, response.name)
          navigation.navigate('BottomTab')
        } else {
          setSnack(true)
        } break
      }
    }
  }

  async function storeData (userId, name) {
    try {
      await AsyncStorage.setItem('userId', userId)
      await AsyncStorage.setItem('name', name)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Image
        source={require('../../assets/images/header-logo-negative.png')}
        resizeMode='contain'
        style={{ flex: 0.15, height: 100, width: 200, alignSelf: 'center' }}
      />

      <View style={{ flex: 0.2, justifyContent: 'space-evenly' }} />

      <View style={{ flex: 0.8, alignItems: 'center' }}>
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='nome'
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='email'
          autoCompleteType='email'
          keyboardType='email-address'
          value={email}
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='senha'
          value={pass}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={pass => setPass(pass)}
        />
        <View style={{ height: 20 }} />
        <Button
          style={{ width: 300, borderRadius: 5 }}
          color='#1C35B9' mode='contained'
          onPress={() => trySignUp('email')}
          labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}
        >
          entrar
        </Button>
      </View>

      <View style={{ flex: 0.1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.textButton}> Já possue conta? entre aqui</Text>
        </TouchableOpacity>
        <Snackbar
          style={{ backgroundColor: 'red', borderRadius: 20 }}
          duration={2500}
          visible={snack}
          onDismiss={() => setSnack(!snack)}
        >
          email ou senha inválidos
        </Snackbar>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    color: '#1C35B9'
  }
})
