import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/LandingPage'
import ReferencePage from '../pages/ReferencePage'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={LandingPage} />
                <Screen name="Reference" component={ReferencePage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack