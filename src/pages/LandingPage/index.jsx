import React, { useEffect, useState }  from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import ReferenceItem from '../../components/ReferenceItem'
import SearchReferences from '../../components/SearchReferences';
import api from '../../services/api'

import styles from './styles'

function LandingPage() {

    const [referencesList, setReferencesList] = useState([])
    const [search, setSearch] = useState('')
    
    const renderItem = ({ item }) => (
        <ReferenceItem 
            name={item.name} 
            challenge={item.challenge_rating} 
            size={item.size} 
            type={item.type}
            key={item.slug} 
            index={item.slug}
        />
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
                <SearchReferences 
                    search={setSearch}
                    setReferencesList={setReferencesList}
                    setPage={setPage} 
                />
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