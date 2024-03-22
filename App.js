import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import TextDescription from './components/TextDescription';
import Scroller from './components/Scroller';
import FlatList from './components/FlatList';
import SectionListTest from './components/SectionListTest';
import FeedBackForm from './components/FeedBackForm';

export default function App() {
  return (
    <>
      <View
        style = {menuStyles.container}>
        <LittleLemonHeader />
        <TextDescription />
        <FeedBackForm />
      </View>
  

      <View>
        <Footer/>
      </View>
    </>

  );
}

const menuStyles = StyleSheet.create(
  {
    container: {
      flex:1,
      backgroundColor: '#495E57',
    },

    title:{

    }
  }
)
