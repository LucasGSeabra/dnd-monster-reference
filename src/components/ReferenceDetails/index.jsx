import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

function ReferenceDetails(props) {

    const[reference, setReference] = useState([])

    useEffect(() => {
        setReference(props.details)
    }, [props.details])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.detailTitle}</Text>
            </View>
            {props.description && <Text style={styles.description}>{props.description}</Text>}
                {reference && reference.map(ref => {
                    return (
                        <View style={styles.referenceContainer} key={ref.name}>
                            <Text style={styles.referenceName}>{ref.name}</Text>
                            <Text style={styles.referenceDescription}>{ref.desc}</Text>
                        </View>
                    )
                })}
        </View>
    )
}

export default ReferenceDetails