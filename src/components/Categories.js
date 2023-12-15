/*---Categories (Child component of 'ShoppingList')---
- This component generates a dropdown list for selecting a category (using 'uniqueCategories' from 'ShoppingList').
- When a category is selected, it updates the 'selectedCat' state in 'ShoppingList' using the 'setSelectedCat' function.
- The 'Reset' button allows resetting the selection by calling 'setSelectedCat' with an empty string.
*/

import '../styles/Categories.css'


function Categories({ setSelectedCat, selectedCat, uniqueCategories }) {

    return (
        <div className='categories'>
            <label>Catégorie de plantes : </label>
            <select className='categories_select' onChange={(e) => setSelectedCat(e.target.value)} value={selectedCat} > 
                <option value=''>toutes les catégories</option> 
                {uniqueCategories.map((category) =>
                    <option key={category} value={category}>{category}</option>
                )}
            </select>
            <button className='reset_button' onClick={() => setSelectedCat('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories