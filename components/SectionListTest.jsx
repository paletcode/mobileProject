import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, Image, ScrollView } from 'react-native';


// the element list
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);



export default function MenuList() {


  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  const Separator  = () => <View style={menuStyles.separator} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={menuStyles.container}>


      {!showMenu && (

        <ScrollView>
          <Image source={require("../assets/iconlemon.png")} style={menuStyles.icon} resizeMode='contain'/>
          <Image source={require("../assets/pic1.png")} style={menuStyles.logo} resizeMode='cover'  />
          <Image source={require("../assets/pic2.png")} style={menuStyles.logo} resizeMode='cover'  />
          <Image source={require("../assets/pic3.png")} style={menuStyles.logo} resizeMode='cover'  />
          <Text>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. View our
            menu to explore our cuisine with daily specials!
          </Text>
        </ScrollView>

      )}

      <Pressable style={menuStyles.button} onPress={() => { setShowMenu(prevState => !prevState) }}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>

      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator} />
      )}


    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: "center"

  },

  icon:{
    width:100,
    height:100,
  },

  logo:{
    width:250,
    height:300,
  },

  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },

  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
    backgroundColor: "#ffffff",
  },

  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: '#ffffff',
    fontSize: 20
  },

  itemText: {
    fontSize: 15
  },

  separator: {
    borderBottomWidth: 1,
    color: '#ffffff',
  },

  sectionHeader: {
    backgroundColor: '#005511',
    color: '#ffffff',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
})