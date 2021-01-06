import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppStack from './src/routes/AppStack'
import AppLoading from 'expo-app-loading'
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'
import { VollkornSC_600SemiBold, VollkornSC_700Bold } from '@expo-google-fonts/vollkorn-sc'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    VollkornSC_600SemiBold,
    VollkornSC_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    )
  }  
}
