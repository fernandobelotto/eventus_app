import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')

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
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='senha'
          value={pass}
          onChangeText={pass => setPass(pass)}
        />
        <TextInput
          style={{ width: 300, height: 50 }}
          mode='outlined'
          label='confirme a senha'
          value={pass2}
          onChangeText={pass => setPass2(pass)}
        />
        <View style={{ height: 20 }} />
        <Button style={{ width: 300, borderRadius: 5 }} color='#1C35B9' mode='contained' onPress={() => navigation.navigate('BottomTab')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: 'white' }}>
          entrar
        </Button>
      </View>

      <View style={{ flex: 0.1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.textButton}> Já possue conta? entre aqui</Text>
        </TouchableOpacity>

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
