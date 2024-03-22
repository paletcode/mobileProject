import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const menuItems = [
    { id: '001', name: 'Burger' },
    { id: '002', name: 'Pizza' },
    { id: '003', name: 'Hot dog' },
    { id: '004', name: 'Pudding' },
    { id: '005', name: 'Eggs' },
    { id: '006', name: 'Steak' },
    { id: '007', name: 'Fried Chicken' },
    { id: '008', name: 'Arepa' },

]



const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ id, name }) => {
    return (
        <>
            <View style={menuStyles.innerContainer}>
                <Text style={menuStyles.title}>{id}</Text>
                <Text style={menuStyles.title}>{name}</Text>
            </View>
        </>


    );
}



export default function MenuList() {

    const renderItems = ({ item }) => <Item id={item.id} name={item.name} />

    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.title}> View Menu </Text>
            <FlatList 
            data={menuItems} 
            renderItem={renderItems} 
            keyExtractor={(item) => item.id} 
            ItemSeparatorComponent={Separator} />

        </View>

    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },

    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        color: 'white',
        fontSize: 20
    },

    separator: {
        borderBottomWidth: 1,
        borderColor: 'white'
    }
})