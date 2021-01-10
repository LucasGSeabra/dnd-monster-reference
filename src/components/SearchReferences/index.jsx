import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function SearchReferences(props) {
    const [searchInput, setSearchInput] = useState('')

    async function handleSearch(searchValue) {
        setSearchInput(searchValue)
        await props.setReferencesList([])
        await props.setPage(1)
        await props.search(searchValue)
        props.search(searchValue)
    }

    return(
        <View style={styles.container} >
            <Feather name="search" size={24} color="#fff"/>
                <TextInput
                    style={styles.searchInput} 
                    clearButtonMode="always"
                    value={searchInput}
                    onChangeText={(text) => handleSearch(text)}
            />
        </View>
    )
}

export default SearchReferences