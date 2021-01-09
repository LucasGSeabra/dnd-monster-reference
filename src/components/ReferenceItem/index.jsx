import React, { memo } from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

function ReferenceItem(props) {

    const { navigate } = useNavigation()

    function handleClick(index) {
        navigate('Reference', { index: index})
    }

    return (
        <RectButton style={styles.item} onPress={() => handleClick(props.index)}>
            <Text style={styles.itemName}>{props.name}</Text>
            <Text style={styles.itemDescription}>CR: {props.challenge}, {props.size} {props.type} </Text>
        </RectButton>
    )
}

export default memo(ReferenceItem)