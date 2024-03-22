import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';

export default function FeedBackForm() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <ScrollView>
            <Text style = {styles.plainText} >
                Username:
            </Text>

            <TextInput 
            style = {styles.TextInput} 
            value ={username}
            onChangeText = {onChangeUsername}
            placeholder = {'Username'}>

            </TextInput>

            <Text style = {styles.plainText} >
                Password:
            </Text>

            <TextInput 
            style = {styles.TextInput} 
            value = {password}
            onChangeText = {onChangePassword}
            placeholder = {'Password'}>

            </TextInput>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    plainText:{
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        color: "#ffffff",


        
    },
    
    TextInput:{
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: "#ffffff",

    }
}
    
)