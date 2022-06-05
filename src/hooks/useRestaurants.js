import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null,
    });
        
    //function that allows us to search for a specific restaurant
    const searchRestaurants = async (term) => {
        setResults({ 
            data: null,
            loading: true,
            error: null,
        });
    
        try {
            //we use the yelp api to search for a specific restaurant
            const response = await yelp.get("/search", {
                params: {
                limit: 50,
                term,
                location: "Hong Kong"
                }
            });
            setResults({ 
                data: response?.data?.businesses,
                loading: false,
                error: null,
        
            });

        } catch (error) {
            setResults({ 
                data: null,
                loading: false,
                error: "Something went wrong",
            });
        }
    }

    return [results, searchRestaurants];
}