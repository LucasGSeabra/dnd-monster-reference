import React, { useEffect, useState }  from 'react'
import { View } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import ReferenceItem from '../../components/ReferenceItem'
import SearchReferences from '../../components/SearchReferences';
import api from '../../services/api'

import styles from './styles'

function LandingPage() {

    const [referencesList, setReferencesList] = useState([])
    const [search, setSearch] = useState('')
    
    const renderItem = ({ item }) => (
        <ReferenceItem name={`${item.name} CR: ${item.challenge_rating}`} key={item.slug} index={item.slug}/>
    )

    useEffect(() => {
        api.get('/', {
            params: {
                fields: ['slug', 'name', 'challenge_rating', 'type', 'size'].join(),
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
                <FlatList
                    data={referencesList}
                    renderItem={renderItem}
                    keyExtractor={item => item.slug}
                    onEndReachedThreshold={40}
                    onEndReached={() => setPage(page + 1)}
                />
        </View>
    )
}

export default LandingPage