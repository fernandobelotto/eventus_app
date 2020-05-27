import { postApi } from '../api/fetch'

export default async function login(userEmail, userPass, loginOption) {
  if (userEmail && userPass) {
    try {
      const user = {
        email: userEmail,
        password: userPass,
        loginOption: loginOption
      }
      const url = '/user/login'
      const response = await postApi(url, user)
      console.log('response', response)
      if (response.status === 'success') return true
    } catch {
      console.log('Ops! Algo aconteceu, tente novamente mais tarde!')
      return false
    }
  } else {
    console.log('Preencha os campos de usuário e senha')
    return false
  }
}
