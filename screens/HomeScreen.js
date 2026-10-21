//IMPORTS
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

//FUNCTION Export OR Component to use <Tag/>
export default function HomeScreen({ navigation }){
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.title}>
                Welcome Home 🏠
            </Text>
            <Text variant='bodyLarge' style={styles.subtitle}>
                Placeholder homescreen content
            </Text>
            <Button 
                mode='contained'
                style={styles.button}>
                    Go to details
            </Button>
        </View>
    );
}

//STYLES or Other anchor/hooks
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#72c0ff'
    },
    title: {
        marginBottom: 12, fontWeight: 'bold'
    },
    subtitle: {
        textAlign: 'center', marginBottom: 24, color: '#000000'
    },
    button: {
        marginTop: 8
    }
})