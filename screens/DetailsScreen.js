import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium' style={styles.title}>
                Details Placeholder
            </Text>
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