
import NetInfo from '@react-native-community/netinfo'
import { postApi } from '../api/fetch'

export default async function signUp (email, name, loginOption, pass) {
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
    console.log('response da api :>> ', response)
    if (response.status === 'success') return true
  } catch (e) {
    console.log('Ops! something went wrong when signup')
    console.log(e)
  }
}
