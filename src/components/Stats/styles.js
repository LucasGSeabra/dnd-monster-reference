import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 

    valuesContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
        
    },

    statName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    statValue: {
        color: '#fff',
        fontSize: 18
    },

})

export default styles