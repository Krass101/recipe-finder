import React,{useEffect, useState} from 'react';
import './App.css';
import RecipeList from './FetchRecipes';



function App() {

// Add the API ID and KEY
const API_ID = API_ID;
const API_KEY = API_KEY;

// Set up variables to hold data
const [query, setQuery] = useState('');
const [search, setSearch] = useState('chicken');
const [recipe, setRecipe] = useState([]);

// useEffect is used to refresh the page every time the search button is clicked
useEffect (()=> {fetchRecipes()}, [search]);

// Use the query variable to hold the string typed in the search field. Updated after every keystroke
const getQuery = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
}  

// Prevent the default refresh functonality of the submit button. Transfer the variable in query to search variable  
const getSearch =(e) => {
    e.preventDefault();
    setSearch(query);
    console.log('the searcg is ' + search);
}

// Fetch the API data using the search variable which was populated when the search button is pressed
const fetchRecipes = async () => {
    const result = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await result.json();
    setRecipe(data.hits);
}

// Render the page
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input  onChange={getQuery} className="search-bar" />
        <button className="search-button" >Search</button>
      </form>
      <div className="recipes">
      <div className="recipe">
        {recipe.map( recipe => (  <RecipeList key={recipe.recipe.label} name={recipe.recipe.label}   image={recipe.recipe.image}   />   ))}
      </div>
      </div>
    </div>
  )
}

export default App;
