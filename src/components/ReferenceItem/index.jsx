import React from 'react'
import { Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import styles from './styles'

function ReferenceItem(props) {
    return (
        <BorderlessButton style={styles.item}>
            <Text style={styles.itemName}>{props.name}</Text>
        </BorderlessButton>
    )
}

export default ReferenceItem