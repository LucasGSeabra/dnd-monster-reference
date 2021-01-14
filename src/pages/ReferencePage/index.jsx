import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import ReferenceDetails from '../../components/ReferenceDetails'
import Loading from '../../components/Loading'
import Stats from '../../components/Stats'
import api from '../../services/api'

import styles from './styles'

function ReferencePage(props) {

    const [reference, setReference] = useState([])
    const [loadingVisible, setLoadingVisible] = useState(true)

    useEffect(() => {
        api.get(`/${props.route.params.index}`).then( response => {     
            if(response.data.legendary_actions) {
               setReference(response.data)
            } else {
               setReference({...response.data, legendary_actions: null, legendary_desc: null})
            }
            setTimeout(() => {
                setLoadingVisible(false)
            }, 500);
        }).catch( error => 
            console.log(error) 
        )
    }, [])
    
     return (
        <View style={styles.container}>
            <Loading visible={loadingVisible} />
            <PageHeader 
                title={reference.name} 
                subTitle={`${reference.size} ${reference.type}, ${reference.alignment} `} 
            >
                <Stats statValues={[
                    {name: 'STR', value: reference.strength},
                    {name: 'DEX', value: reference.dexterity},
                    {name: 'CON', value: reference.constitution},
                    {name: 'INT', value: reference.intelligence},
                    {name: 'WIS', value: reference.wisdom},
                    {name: 'CAR', value: reference.charisma},
                    ]} 
                />
            </PageHeader>
            <ScrollView>
                <ReferenceDetails detailTitle="Info" details={[
                    {name: 'Armor Class', desc: `${reference.armor_class}(${reference.armor_desc})`},
                    {name: 'Hit Points', desc: `${reference.hit_points}(${reference.hit_dice})`},
                    {name: 'Senses', desc: reference.senses },
                    {name: 'Languages', desc: reference.languages },
                    ]}
                />
                <ReferenceDetails 
                    detailTitle="Special Abilities" 
                    details={reference.special_abilities}
                />
                <ReferenceDetails 
                    detailTitle="Actions" 
                    details={reference.actions}
                />
                {reference.legendary_actions && 
                    <ReferenceDetails 
                    detailTitle="Legendary Actions" 
                    description={reference.legendary_desc}
                    details={reference.legendary_actions}
                    />
                }   
            </ScrollView>
        </View>
    )
}

export default ReferencePage