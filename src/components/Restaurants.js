import {View,Text,StyleSheet} from "react-native";
import useRestaurants from "../hooks/useRestaurants";

const Restaurants = () => {

  const [{data,loading, error}, searchRestaurants] = useRestaurants();

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