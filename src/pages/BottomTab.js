import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import TicketsScreen from './TicketsScreen'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: '#6658ED', showLabel: false, style: { backgroundColor: 'transparent', margin: 10, elevation: 0, borderTopWidth: 0 } }}
    >
      <Tab.Screen
        name='HomeScreen' component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='TicketsScreen' component={TicketsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Material name='confirmation-number' color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name='ProfileScren' component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='user' color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
