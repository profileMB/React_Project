/*----CareScale (child component of 'PlantItem')----
- This code displays the number of icons (sun or water) for each plant based on the values of 'light' and 'water'.
- For each 'careType' ('light' or 'water'), it establishes the values of 'maxCareValue', 'careIcon', and 'careLabel'.
- A 'for' loop is utilized to generate a specified number of icons according to the value of 'maxCareValue'.
- In the end, it returns an <li> tag with the 'careLabel' and the 'finalCareIcons' array that contains the number of icons associated to the plant.
*/

import sun_Icon from '../assets/sun_icon.svg'
import water_Icon from '../assets/water_icon.svg'


function CareScale ({ careType, light, water, id }) {

    const sunIcon = <img src={sun_Icon} alt='sun_logo' />
    const waterIcon = <img src={water_Icon} alt='water_logo' />

    const maxCareValue = careType === 'light' ? light : water
    const careIcon = careType === 'light' ? sunIcon : waterIcon
    const careLabel = careType === 'light' ? 'Besoin de soleil' : 'Arrosage conseillé'

    const finalCareIcons = []
  
    for (let i = 0; i < maxCareValue; i++) { // 'maxCareValue' determines the number of icons to be added to the 'finalCareIcons' array.
        finalCareIcons.push(<span key={`${id}-${careType}-${i}`}>{careIcon}</span>) 
    }

    return <li key={`${id}-${careType}`}> {careLabel} : {finalCareIcons} </li>

}

export default CareScale