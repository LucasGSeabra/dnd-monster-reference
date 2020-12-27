import React from 'react' 
import { Text, View } from 'react-native'

import styles from './styles'

function Stats(props) {
    return (
        <View style={styles.statsContainer}>
            {props.statValues.map(stat => {
                return (
                    <View style={styles.valuesContainer}>
                        <Text style={styles.statName}>{stat.name}</Text>
                        <Text style={styles.statValue}>{stat.value}</Text>
                    </View>
                )
            })}  
        </View>
    )
}

export default Stats