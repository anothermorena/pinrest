//the status bar component is used to display things like the time, battery level, and the network connection at the top of the screen.
import { StatusBar } from 'expo-status-bar';

//we need to import these components from react native in order to utilize them inside our jsx blocks
import { StyleSheet, View, FlatList } from 'react-native';


//import our custom made components
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

 const App = () => {

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    }, {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    }
  ] 
  return (
    /*
      The view component is equivalent of a div in web dev. Its a wrapper that wraps multiple elements together 
      To apply styles in React Native, its pretty much the same as in react.
    */
    <View style={styles.container}>
      <Header/>
      <Search />
      {/* The flatlist component is used to render items in a scrollable list view.  In our case, it is going to iterate over every single element of our array of objects*/}
      <FlatList data={commonCategories} renderItem = {({item,index}) => { 

        return (
          <CategoryItem  name={item.name} imageUrl={item.imageUrl} index={index}/>
        )
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      />
     
      <StatusBar style="auto"/>
    </View>
  );
}

//we the styles sheet component to style our app and enhance its look and feel.
//we import the stylesheet component from react native to facilitate this.
//we define all this styles inside the stylesheet object and store them inside a styles variable.
const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  backgroundColor: '#fff3e0',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  //},
});


export default App;