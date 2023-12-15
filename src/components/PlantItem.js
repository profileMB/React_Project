/*----PlantItem (Child component of 'ShoppingList')---
- This component displays the picture and the different characteristics of each plant.
- Thanks to the 'CareScale' component, it displays the light and water requirements of each plant using sun and water icons.
*/

import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ cover, name, category, price, id, light, water }) { 
	return (
		<div className='plant_item'>
            <img className='plant_item_cover' src={cover} alt={`${name} cover`} />
		    <ul className='plant_characteristics'>
                <li>Nom : {name} </li>
                <li>Catégorie : {category}</li>
                <li className='plant_item_price'> {price}€ </li>
                <CareScale careType='light' id={id} light={light} />
                <CareScale careType='water' id={id} water={water} />
            </ul>
        </div>
	)
}

export default PlantItem