import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '243970341797-fgf153qdpet5pa2hb3176vtmo3erpfda.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true // [Android] related to `serverAuthCode`, read the docs link below *.
})

export default async function googleLogin () {
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    return {
      email: userInfo.user.email,
      name: userInfo.user.name,
      method: 'google'
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return
    }
    console.log('Something went wrong with google login')
    console.log(error)
  }
}
