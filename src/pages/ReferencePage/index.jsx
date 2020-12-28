import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'
import Stats from '../../components/Stats'
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
            <PageHeader title={reference.name} subTitle={`${reference.size} ${reference.type}, ${reference.alignment} `} >
                <Stats statValues={[
                    {name: 'STR', value: reference.strength},
                    {name: 'DEX', value: reference.dexterity},
                    {name: 'CON', value: reference.constitution},
                    {name: 'INT', value: reference.intelligence},
                    {name: 'WIS', value: reference.wisdom},
                    {name: 'CAR', value: reference.charisma},
                    ]} />
            </PageHeader>
        </View>
    )
}

export default ReferencePage