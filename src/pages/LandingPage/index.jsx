import React from 'react'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './styles'

function LandingPage() {
    return (
        <View style={styles.container}>
            <PageHeader title="Monsters List"></PageHeader>
        </View>
    )
}

export default LandingPage