import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import SplashScreen from './pages/SplashScreen'
import CarouselScreen from './pages/CarouselScreen'
import SignInScreen from './pages/login-register/SignInScreen'
import SignUpScreen from './pages/login-register/SignUpScreen'
import SignUpMethodScreen from './pages/login-register/SignUpMethodScreen'
import BottomTab from './pages/BottomTab'

import EventDetailScreen from './pages/ticket-checkout/EventDetailScreen'
import TicketChoiceScreen from './pages/ticket-checkout/TicketChoiceScreen'
import PaymentInfoScreen from './pages/ticket-checkout/PaymentInfoScreen'
import TicketDetailScreen from './pages/TicketDetailScreen'
import TicketReceiveScreen from './pages/ticket-checkout/TicketReceiveScreen'

const Stack = createStackNavigator()

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='CarouselScreen' component={CarouselScreen} />
        {/* signin | register */}
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpMethodScreen' component={SignUpMethodScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        {/* bottom tab */}
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name='TicketDetailScreen' component={TicketDetailScreen} />
        {/* ticket checkout */}
        <Stack.Screen name='EventDetailScreen' component={EventDetailScreen} />
        <Stack.Screen name='TicketChoiceScreen' component={TicketChoiceScreen} />
        <Stack.Screen name='TicketReceiveScreen' component={TicketReceiveScreen} />
        <Stack.Screen name='PaymentInfoScreen' component={PaymentInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default routes
