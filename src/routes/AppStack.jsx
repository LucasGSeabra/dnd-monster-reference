import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/LandingPage'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={LandingPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack