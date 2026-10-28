//IMPORTS
import { StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

//Hard Coded Mock Data
const MOCKITEMS = [
    {
        id: "1", 
        title: "Andventure Book", 
        description: "The hero went on an adventure",
        total: 10
    },
    {
        id: "2", 
        title: "Maths Book", 
        description: "1 + 1 is 2",
        total: 10
    },
    {
        id: "3", 
        title: "Sci-Fi Book", 
        description: "The hero went to space",
        total: 10
    },
    {
        id: "4", 
        title: "Loruem Ipsium Book", 
        description: "I don't remember my Loruem Ipsium...Whoops",
        total: 10
    },
    {
        id: "5", 
        title: "Cat and Dog Book", 
        description: "A book about household pets",
        total: 10
    },
    {
        id: "6", 
        title: "Plant Book", 
        description: "A book about household plants",
        total: 10
    },
    {
        id: "7", 
        title: "Movie Event", 
        description: "Some EHC movie event placeholder",
        total: 10
    },
    
];

//FUNCTION Export OR Component to use <Tag/>
export default function HomeScreen({ navigation }){
    return (
            <ScrollView style={styles.container}>
                <Text variant='headlineMedium' style={styles.title}>
                    Welcome Home 🏠
                </Text>
                {MOCKITEMS.map(item => (
                    <Card
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate("DetailsScreen", { item })}
                    >
                        <Card.Title title={item.title} />
                        <Card.Content>
                            <Text variant='bodyMedium'>{item.description}</Text>
                            <Text style={styles.totalbooks}>Spots remaining: {item.total}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
    );
}

//STYLES or Other anchor/hooks
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    card: {
        marginBottom: 10,
        elevation: 3,
        backgroundColor: '#434242',
    },
    totalbooks: {
        color: 'hotpink',
        fontSize: 'large'
    }
})