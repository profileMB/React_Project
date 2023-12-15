/*---ShoppingList----
This component displays the list of plants based on the selected category and allows the addition of each plant to the cart.
*/

import { plantList } from '../datas/plantList'
import { useState } from 'react'
import Categories from './Categories'
import PlantItem from '../components/PlantItem'
import '../styles/ShoppingList.css'


function ShoppingList({ cart, setCart }) {

    // 'UniqueCategories' contains the 3 types of plant categories.
    const allCategory = plantList.map(plant => plant.category)
    const uniqueCategories = [...new Set(allCategory)] 
    
    const [selectedCat, setSelectedCat] = useState('')

    // 'filteredPlants' contains either the plants from the selected category or all plants if no category is selected.
    const filteredPlants = selectedCat
    ? plantList.filter((plant) => plant.category === selectedCat)
    : plantList

    // The addToCart function manages the addition of a new plant to the cart, depending on whether this reference is already in the cart or not.
    function addToCart(cover, name, price) {

		const currentPlantSaved = cart.find((plant) => plant.name === name)

		if (currentPlantSaved) { 
            /* If the name of the added plant is already present in the cart :
            -> we create a new array 'cartFilteredCurrentPlant' containing all the plants except the one with the name of the added plant. */
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            // In this array, we add a new object representing the details of the added plant and increase its quantity by 1.
			setCart([...cartFilteredCurrentPlant,{ cover, name, price, quantity: currentPlantSaved.quantity + 1 }])

		} else { 
            /* if the name of the added plant is not already in the cart :
            -> we add the object of the added plant to the cart with a quantity of 1. */
			setCart([...cart, { cover, name, price, quantity: 1 }])

		}
	}


    /* The 'ShoppingList' components displays:
    - the 'Categories' component to select a plant category.
    - The list of plants from the selected category (the characteristics of each plant are retrieved using the 'PlantItem' component).
    - A 'Add' button is placed for each plant.
    */
    return (
       
        <div className='shopping_list'>
            <Categories 
                uniqueCategories={uniqueCategories}
                selectedCat={selectedCat}
                setSelectedCat={setSelectedCat}
            />
            <div>
                <ul className='plant_list'>
                    {filteredPlants.map(({ name, category, id, light, water, cover, price }) => (
                        <li key={id}>
                            <PlantItem 
                                name={name}
                                category={category}
                                id={id}
                                light={light} 
                                water={water} 
                                cover={cover} 
                                price={price}
                            />
                            <button className='cart_add_button' onClick={() => addToCart(cover, name, price)}>Ajouter</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList