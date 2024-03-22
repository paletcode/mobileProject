import { View, Text } from 'react-native';

export default function Footer() {
    return(
        <View style={{
            backgroundColor:'#223300',
            marginBottom:10,
        }}>
            <Text style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
            }}>
                2024 - Little Lemon Copyright
            </Text>

        </View>


    );
}