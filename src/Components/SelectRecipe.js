import React from 'react'
import SelectRecipeItem from './SelectRecipeItem'

const SelectRecipe = ( {recipes} ) => {
    
    
    return (
        <section id='selectRecipe'>
            <ul>
                {recipes.map((item) => <SelectRecipeItem key={item.id} recipeItem={item}/>)}
            </ul>
        </section>
    )
}

export default SelectRecipe