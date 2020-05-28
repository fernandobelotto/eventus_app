import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import { Provider as TicketProvider } from './src/context/index'
import Routes from './src/Routes'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1C35B9',
    accent: '#f1c40f'
  },
  fonts: {
    regular: 'Comfortaa-Bold',
    medium: 'Comfortaa-Bold',
    light: 'Comfortaa-Bold',
    thin: 'Comfortaa-Bold'
  }
}

const App = () => {
  return (
    <TicketProvider>
      <PaperProvider
        theme={theme} settings={{
          icon: props => <Feather {...props} />
        }}
      >
        <Routes />
      </PaperProvider>
    </TicketProvider>
  )
}

export default App
