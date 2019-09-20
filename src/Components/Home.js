import React from 'react'
import Title from './Title'
import Filter from './Filter'
import SelectRecipe from './SelectRecipe'
import FeaturedRecipes from './FeaturedRecipes'
import Footer from './Footer'

const Home = ( {recipes} ) => {
    return (
        <div id='mainSection'>
            <Title name='Recipes' />
            <Filter />
            <SelectRecipe recipes={recipes} />
            <FeaturedRecipes />
            <Footer />
        </div>
    )
}

export default Home
