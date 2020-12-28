import React from 'react'
import { View } from 'react-native'

function ReferenceDetails(props) {
    return (
        <View>
            <View>
                <Text>{props.detailTitle}</Text>
            </View>
            
            {props.details.map(detail => {
                return (
                    <View >
                        <Text>{detail.name}</Text>
                        <Text>{detail.value}</Text>
                    </View>
                )
            })}  
        </View>
    )
}

export default ReferenceDetails