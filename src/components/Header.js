import {Text,View, StyleSheet} from "react-native";

const Header = () => {
  return (
      <View style={styles.container}>
        {/*The text component is equivalent to a p tag or an h1 tag in web dev. It is used to wrap text */}
        <Text style={styles.lightHeader}>Grab your</Text>
        <Text style={styles.boldHeader}>delicious meal!!</Text>
      </View>
  )
}

const styles = StyleSheet.create({ 
    //we define different styles as javascript objects
    container: {
        marginTop: 60,
        marginHorizontal: 25,
    },
    lightHeader: {
       fontSize: 35   
    },
    boldHeader: { 
       fontSize: 40,
       fontWeight: 'bold',
    }
});

export default Header;