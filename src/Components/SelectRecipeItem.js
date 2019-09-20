import React from 'react'

const SelectRecipeItem = ( {recipeItem} ) => {

    return (
        <li>{recipeItem.name} <button>X</button></li>
    )
}

export default SelectRecipeItem