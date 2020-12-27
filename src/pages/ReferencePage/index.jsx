import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'


function ReferencePage(props) {

    const [reference, setReference] = useState([])

    useEffect(() => {
        api.get(`${props.route.params.index}`).then( response => {
            setReference(response.data)
        }).catch( error => 
            console.log(error) 
        )
    }, [])
    
    return (
        <View>
            <PageHeader title={reference.name} subTitle={`${reference.size} ${reference.type}`} >

            </PageHeader>
        </View>
    )
}

export default ReferencePage