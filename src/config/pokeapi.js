import axios from "axios";

// Create an Axios instance with custom configuration
const pokeapi = axios.create({
  baseURL: 'http://localhost:8081', // Replace with your API's base URL
  timeout: 5000, // Adjust the timeout as needed
  withCredentials: true, // Include credentials (e.g., cookies) in the request
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  },
});

export default pokeapi;