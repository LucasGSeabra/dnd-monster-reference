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
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    
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

    function paginationHandler() {
        if(referencesList.length < count && search.length === 0) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        api.get('', {
            params: {
                fields: ['slug', 'name', 'challenge_rating', 'type', 'size'].join(),
                limit: 100,
                ordering: 'slug',
                search,
                page
            }
        }).then( response => {
            setCount(response.data.count)
            setReferencesList([...referencesList, ...response.data.results])
        }).catch( error => 
            console.log(error) 
        )
    }, [search, page])

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
                    onEndReached={() => paginationHandler()}
                />
        </View>
    )
}

export default LandingPage