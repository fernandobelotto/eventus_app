// import { LoginManager, AccessToken } from 'react-native-fbsdk'

// export default async function facebookLogin() {
//   try {
//     LoginManager.logInWithPermissions(['public_profile', 'email']).then(
//       function (result) {
//         if (result.isCancelled) {
//           console.log('facebook login canceled!')
//         } else {
//           console.log('Login success with permissions: ' + result.grantedPermissions.toString())
//           AccessToken.getCurrentAccessToken().then((data) => {
//             const { accessToken } = data
//             try {
//               fetch('https://graph.facebook.com/v2.5/me?fields=name,email,picture,birthday&access_token=' + accessToken)
//                 .then((response) => response.json())
//                 .then((user) => {
//                   return { email: user.email, name: user.name, loginOption: 'facebook' }
//                 })
//             } catch (e) {
//               console.log('Somenthing whent wrong: ', e)
//             }
//           })
//         }
//       }
//     )
//   } catch (e) {
//     console.log(e)
//   }
// }
