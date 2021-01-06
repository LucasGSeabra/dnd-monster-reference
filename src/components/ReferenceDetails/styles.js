import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginBottom: 15
    },

    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 5
    },

    referenceContainer: {
        marginVertical: 5
    },

    title: {
        fontFamily: 'VollkornSC_600SemiBold',
        fontSize: 28,
        marginBottom: 5
    },

    description: {
        fontSize: 18,
        textAlign: 'justify',
        marginVertical: 5
    },

    referenceName: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
        textAlign: 'justify'
    },

    referenceDescription: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 18,
        textAlign: 'justify'
    }
})

export default styles