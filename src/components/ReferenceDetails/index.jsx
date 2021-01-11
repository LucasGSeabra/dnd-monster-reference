import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

function ReferenceDetails(props) {

    const[references, setReferences] = useState([])

    useEffect(() => {
        setReferences(props.details)
    }, [props.details])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.detailTitle}</Text>
            </View>
            {props.description && <Text style={styles.description}>{props.description}</Text>}
                {references && references.map(reference => {
                    return (
                        <View style={styles.referenceContainer} key={reference.name}>
                            <Text style={styles.referenceName}>{reference.name}</Text>
                            <Text style={styles.referenceDescription}>{reference.desc}</Text>
                        </View>
                    )
                })}
        </View>
    )
}

export default ReferenceDetails