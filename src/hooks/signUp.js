
import NetInfo from '@react-native-community/netinfo'
import { postApi } from '../api/fetch'

function checkResponse(response) {
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

export default async function signUp(email, name, loginOption, pass) {
  try {
    const { isConnected } = await NetInfo.fetch()
    if (!isConnected) return 'no internet'

    var userToCreate = {
      name: name,
      email: email,
      loginOption: loginOption
    }

    if (loginOption === 'email') {
      userToCreate.password = pass
    }

    const url = '/user'
    const response = await postApi(url, userToCreate)
    if (response.status === 'sucess') return true
  } catch {
    console.log('Ops! something went wrong')
  }
}
