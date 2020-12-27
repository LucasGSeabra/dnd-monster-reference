import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#F9564F'
    }, 

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    topBarTitle: {
        color: '#fff',
        fontSize: 12
    },

    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    headerTitle: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginTop: 15
    },
    
    headerSubTitle: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 32,
    }

})

export default styles;