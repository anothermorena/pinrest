import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({term, setTerm, categories}) => {

  return (
  /* The flatlist component is used to render items in a scrollable list view.  In our case, it is going to iterate over every single element of our array of objects*/
  <FlatList data={categories} renderItem = {({item,index}) => { 

    return (
      <CategoryItem
       name={item.name} 
       imageUrl={item.imageUrl}
        index={index} 
        active={item.name === term} 
        handlePress={() => setTerm(item.name)}
        />
    )
  }}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item.name}
  
  />
  )
}

export default Categories;