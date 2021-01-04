import React, { useEffect, useState }  from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import ReferenceItem from '../../components/ReferenceItem'
import SearchReferences from '../../components/SearchReferences';
import api from '../../services/api'

import styles from './styles'

function LandingPage() {

    const [referencesList, setReferencesList] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        api.get('/', {
            params: {
                fields: ['slug', 'name', 'challenge_rating'].join(),
                limit: 100,
                ordering: 'slug',
                search
            }
        }).then( response => {
            setReferencesList(response.data.results)
        }).catch( error => 
            console.log(error) 
        )
    }, [search])

    return (
        <View style={styles.container}>
            <PageHeader title="Monsters List">
                <SearchReferences search={setSearch}/>
            </PageHeader>
            <ScrollView>
                { referencesList.map(reference => {
                    return (
                        <ReferenceItem name={`${reference.name} CR: ${reference.challenge_rating}`} key={reference.slug} index={reference.slug}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default LandingPage