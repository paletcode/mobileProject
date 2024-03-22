import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

const items = ["lunes", "martes"]

export default function Scroller() {
    return (
        <View style={{
            flex: 0.75
        }}>
            <ScrollView indicatorStyle={"white"} style={{
                padding: 40


            }}>
                <Text style={{
                    color: '#EDEFEE',
                    textAlign: 'center'
                }}>View Menu</Text>
                
                <Text style={{
                    color: '#EDEFEE',
                    textAlign: 'center',
                    fontSize:20
                }}>{items}</Text>
            </ScrollView>
        </View>

    );
}