/** 
 * In our App.js file we define the navigation options for our app.
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

//create the navigation of our app and define all the screens
const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen,

}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Pinrest",
  }
});

export default createAppContainer(navigator);