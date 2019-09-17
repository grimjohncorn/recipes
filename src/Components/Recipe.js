import React from 'react'

const Recipe = ( {match} ) => {
    return (
        <div>
            <p>This is the recipe page</p>
            <p>Recipe ID is {match.params.recipeId}</p>
        </div>
    )
}

export default Recipe