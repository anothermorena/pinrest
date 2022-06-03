//the status bar component is used to display things like the time, battery level, and the network connection at the top of the screen.
import { StatusBar } from 'expo-status-bar';

//we need to import these components from react native in order to utilize them inside our jsx blocks
import { StyleSheet, Text, View } from 'react-native';

 const App = () => {
  return (
    /*
      The view component is equivalent of a div in web dev. Its a wrapper that wraps multiple elements together 
      To apply styles in React Native, its pretty much the same as in react.
    */
    <View style={styles.container}>
      {/*The text component is equivalent to a p tag or an h1 tag in web dev. It is used to wrap text */}
      <Text>Deleicious Food Search 2</Text>
     {/* */}
      <StatusBar style="auto"/>
    </View>
  );
}

//we the styles sheet component to style our app and enhance its look and feel.
//we import the stylesheet component from react native to facilitate this.
//we define all this styles inside the stylesheet object and store them inside a styles variable.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;