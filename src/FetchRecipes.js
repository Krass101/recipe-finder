import React from 'react';
import './App.css';

const RecipeList = ({name,image}) => {
    
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} />
        </div>
        
    )
}

export default RecipeList;