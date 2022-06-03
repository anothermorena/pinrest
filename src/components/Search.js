import {View, TextInput, StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'; //expo gives us vector icons out of the box we can choose which ones to use. This is similar to react icons but they are imported as icons
import { elevation } from '../common/styles';

const Search = () => {
  return (
      /*If you want to apply more tham one style object from your stylesheets you can pass them as an array of styles */
    <View style={[styles.container, styles.elevation]}>
        {/* Inside the font awesome component we need to specify which icons we want to use as well as other attributes via props */}
        <FontAwesome name="search" size={25}/> 
        <TextInput style={styles.input} placeholder="Restaurant, food" />
    </View>
  )
}

const styles = StyleSheet.create({

    container: { 
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 40
    },
    elevation,
    input: {
        fontSize: 20,
        marginLeft: 10,
    }
});
export default Search;