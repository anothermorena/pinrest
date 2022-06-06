import {View,Text,StyleSheet,ActivityIndicator, FlatList} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";


const Restaurants = ({term}) => {

  const [{data,loading, error}, searchRestaurants] = useRestaurants();

  //we use the useEffect hook to call the searchRestaurants function when the component is mounted/rendered and when the term changes
  useEffect(() => {
    searchRestaurants(term);
  },[term]);

  if(loading) return <ActivityIndicator size="large" marginVertical={30} color="rgb(241, 186, 87)" />;

  if(error) return (
    <View style={styles.container}>
      <Text style={styles.header}>{error}</Text>
    </View>
    )

  return (
  <View style={styles.container}>
    <Text style={styles.header}>Top Restaurants</Text>
    <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item, index }) => (
       
            <RestaurantItem restaurant={item} />
     
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  }

});

export default Restaurants;