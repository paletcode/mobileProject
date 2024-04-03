import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function FeedBackForm() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (

        <KeyboardAvoidingView
            behavior = {Platform.OS === 'android' ? 'padding': 'height'}>
            <ScrollView>
                <Text style={styles.plainText} >
                    Username:
                </Text>

                <TextInput
                    style={styles.TextInput}
                    value={username}
                    onChangeText={onChangeUsername}
                    placeholder={'Username'}
                    onFocus={Alert.alert("Type your username")}>

                </TextInput>

                <Text style={styles.plainText} >
                    Password:
                </Text>

                <TextInput
                    style={styles.TextInput}
                    value={password}
                    onChangeText={onChangePassword}
                    secureTextEntry = {true}
                    placeholder={'Password'}>

                </TextInput>

            </ScrollView>
        </KeyboardAvoidingView>



    )
}

const styles = StyleSheet.create({
    plainText: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        color: "#ffffff",
        fontSize: 15,
        fontWeight: 'bold'



    },

    TextInput: {
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: "#ffffff",
        fontSize: 15,

    }
}

)