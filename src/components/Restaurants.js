import {View,Text,StyleSheet} from "react-native";
import yelp from "../api/yelp";

const Restaurants = () => {

  //function that allows us to search for a specific restaurant
  const searchRestaurants = async () => {
    //we use the yelp api to search for a specific restaurant
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: "Pizza",
        location: "san jose"
      }
    });
    return response.data.businesses;
  }
  return (
  <View style={styles.container}>
    <Text style={styles.header}>Top Restaurants</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    height: 100,
  }

});

export default Restaurants;