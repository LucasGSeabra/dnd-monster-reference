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
        fontFamily: 'VollkornSC_700Bold',
        color: '#fff',
        fontSize: 18,
    },

    statValue: {
        fontFamily: 'VollkornSC_600SemiBold',
        color: '#fff',
        fontSize: 18
    },

})

export default styles