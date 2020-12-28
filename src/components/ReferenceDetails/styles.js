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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5
    },

    description: {
        fontSize: 18,
        textAlign: 'justify',
        marginVertical: 5
    },

    referenceName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify'
    },

    referenceDescription: {
        fontSize: 18,
        textAlign: 'justify'
    }
})

export default styles