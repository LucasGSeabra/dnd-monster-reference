import React, { useEffect, useState }  from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import ReferenceItem from '../../components/ReferenceItem'
import api from '../../services/api'

import styles from './styles'

function LandingPage() {

    const [referencesList, setReferencesList] = useState([])
    
    useEffect(() => {
        api.get('?fields=slug,name,challenge_rating&limit=100&ordering=slug').then( response => {
            setReferencesList(response.data.results)
        }).catch( error => 
            console.log(error) 
        )
    }, [])

    return (
        <View style={styles.container}>
            <PageHeader title="Monsters List"></PageHeader>
            <ScrollView>
                { referencesList.map(reference => {
                    return (
                        <ReferenceItem name={reference.name} key={reference.index} index={reference.index}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default LandingPage