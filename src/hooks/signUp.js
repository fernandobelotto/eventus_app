
import { useContext } from 'react'
import NetInfo from '@react-native-community/netinfo'

import { Context } from '../context/index'
import { postApi } from '../../api/desafio2020Fetch'

function checkResponse (response) {
  if (response.status === 'success') {
    return true
  } else {
    if (response.code === '004' || response.code === '003' || response.code === '002' || response.code === '001') {
      console.log(response.message)
    } else {
      console.log('Ops! Algo aconteceu, tente novamente mais tarde!')
    }
    console.log(true)
  }
}

function checkConnection (isConnected) {
  if (!isConnected) {
    console.log('Verify your internet connection!')
    return false
  }
  return true
}

export default async function signUp (email, name, loginOption) {
  const { user } = useContext(Context)
  const { state: userState, dispatch: userDispatch } = user
  try {
    const { isConnected } = await NetInfo.fetch()
    if (!checkConnection(isConnected)) return

    var userToCreate = {
      name: name,
      email: email,
      loginOption: loginOption
    }

    const url = '/user'
    const response = await postApi(url, userToCreate)
    if (!checkResponse(response)) return

    await userDispatch({ type: 'add_email_name_loginOption', payload: { id: response.userId, name: userToCreate.name, code: userToCreate.loginOption } })
  } catch {
    console.log('Ops! something went wrong')
  }
}
