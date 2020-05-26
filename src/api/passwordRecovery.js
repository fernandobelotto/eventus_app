import { postApi, patchApi } from './fetch'

export async function sendCodeApi(email) {
  const body = {
    email
  }

  const response = await postApi('/confirmationCode', body)
  return response
}

export function changePasswordApi(userId, password, code) {
  const body = {
    newPassword: password,
    confirmationCode: code
  }
  const response = patchApi(`/user/${userId}/password`, body)
  return response
}
