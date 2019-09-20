import React from 'react'

const Filter = () => {
    return (
        <form id='filter'>
            <label htmlfor="type">Type:</label>
            <select name="type">
                <option value="ALL">ALL</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
            </select>
        </form>
    )
}

export default Filter