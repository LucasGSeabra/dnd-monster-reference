import React from 'react'
import { View } from 'react-native'

function PageHeader(props) {
    return (
        <View>
            <View style={styles.topBar}>
                <Text style={styles.topTitle}>5e Monster Reference</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default PageHeader