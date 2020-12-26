import React, { useEffect, useState }  from 'react'
import { View, Text } from 'react-native'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'

import styles from './styles'

function LandingPage() {

    const [references, setReferences] = useState([])

    useEffect(() => {
        api.get('monsters/').then( response => {
            setReferences(response.data.results)
        }).catch( error => 
            console.log(error) 
        )
    }, [])

    return (
        <View style={styles.container}>
            <PageHeader title="Monsters List"></PageHeader>
        </View>
    )
}

export default LandingPage