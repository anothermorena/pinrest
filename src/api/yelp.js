import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer ufgrI6YfTLwarNTWORzSP16NKKhcaCU7EYAJdTrQh9IQEs9dSXHFAP3SBnpRCqqTNEhVhZXzsUpTseugpx6moJxC0-lk3xABywg7MEdxMKIbKDu6sKoFFpOcdambYnYx" 
    }
});