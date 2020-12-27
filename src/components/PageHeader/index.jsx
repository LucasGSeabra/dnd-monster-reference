import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function PageHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarTitle}>5e Monster Reference</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
                <Text style={styles.headerSubTitle}>{props.subTitle}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default PageHeader