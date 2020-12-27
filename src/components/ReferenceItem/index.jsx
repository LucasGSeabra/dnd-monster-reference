import React from 'react'
import { Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

function ReferenceItem(props) {

    const { navigate } = useNavigation()

    function handleClick(index) {
        navigate('Reference', { index: index})
    }

    return (
        <BorderlessButton style={styles.item} onPress={() => handleClick(props.index)}>
            <Text style={styles.itemName}>{props.name}</Text>
        </BorderlessButton>
    )
}

export default ReferenceItem