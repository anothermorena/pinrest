/*
    Screens are equivalent to pages in web dev.

 */
import { useState } from "react";
//the status bar component is used to display things like the time, battery level, and the network connection at the top of the screen.
import { StatusBar } from "expo-status-bar"
import { View, StyleSheet } from "react-native"

//import our custom made components
import Categories from "../components/Categories"
import Header from "../components/Header"
import Restaurants from "../components/Restaurants"
import Search from "../components/Search"

const HomeScreen = () => {
  const [term, setTerm] = useState("Burger");  //set the initial state of the search term to burger
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png"),
    }, {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../assets/images/pasta.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../assets/images/smoothies.png"),
    }
  ] 
  return (
     /*
      The view component is equivalent of a div in web dev. Its a wrapper that wraps multiple elements together 
      To apply styles in React Native, its pretty much the same as in react.
    */
      <View style={styles.container}>
      <Header upperText="Grab your" lowerText="delicious meal!" />
      <Search setTerm={setTerm}/>
      <Categories term={term} setTerm={setTerm} categories={commonCategories}/>
      <Restaurants  term={term} />
      <StatusBar style="auto"/>
    </View>
  )
}

/*
we use the styles sheet component to style our app and enhance its look and feel.
we import the stylesheet component from react native to facilitate this.
we define all this styles inside the stylesheet object and store them inside a styles variable.
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(253,253,253)",
    },
    header1: {
      fontSize: 35,
      marginTop: 60,
      marginHorizontal: 25,
    },
    header2: {
      fontSize: 40,
      marginHorizontal: 25,
      fontWeight: "bold",
    },
  });

export default HomeScreen;