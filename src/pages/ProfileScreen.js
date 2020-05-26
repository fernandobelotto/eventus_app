import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Appbar, Avatar, Button } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Appbar.Content
          title='Meu Perfil' titleStyle={{ fontFamily: 'Comfortaa-Bold', color: '#1C35B9', fontSize: 26 }}
        />
        <Appbar.Action icon={() => <Feather name='settings' color='#1C35B9' size={25} />} onPress={() => { }} />
      </Appbar.Header>
      <View style={{ marginTop: 30 }}>
        <Avatar.Image size={150} source={require('../assets/images/profile.png')} style={{ alignSelf: 'center' }} />
        <Text style={styles.text}>Juliana Peres</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50 }}>

        <Button style={{ width: 200, borderColor: '#1C35B9', borderWidth: 3, borderRadius: 5 }} icon={() => <Feather name='log-out' color='#1C35B9' size={20} />} color='#1C35B9' mode='outlined' onPress={() => console.log('Pressed')} labelStyle={{ fontFamily: 'Comfortaa-Bold', color: '#1C35B9' }}>
          Sair
        </Button>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  text: {
    color: '#3023AE',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    textAlign: 'center'
  }
})
