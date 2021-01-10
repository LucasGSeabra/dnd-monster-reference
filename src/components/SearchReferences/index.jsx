import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function SearchReferences(props) {
    const [searchInput, setSearchInput] = useState('')
    const [searchInputHidden, setSearchInputHidden] = useState(false)

    async function handleSearch(searchValue) {
        setSearchInput(searchValue)
        await props.setReferencesList([])
        await props.setPage(1)
        await props.search(searchValue)
    }

    function showSearchInput() {
        setSearchInputHidden(!searchInputHidden)
    }

    return(
        <View style={styles.container} >
            <RectButton onPress={() => showSearchInput()}><Feather name="search" size={24} color="#fff"/></RectButton>
            {searchInputHidden && 
                <TextInput
                    style={styles.searchInput} 
                    clearButtonMode="always"
                    value={searchInput}
                    onChangeText={(text) => handleSearch(text)}
                />}
        </View>
    )
}

export default SearchReferences