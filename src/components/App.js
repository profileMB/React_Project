/*---App.js (root component)---

¤ 'App.js' contains 4 components :
- The 'Banner' component.
- The 'Cart' component, responsible for displaying and managing the cart.
- The 'ShoppingList' component, which displays a list of plants based on the selected category and allows users to add each plant to the cart.
- The 'Footer' component, featuring an input field for entering an email address.

¤ We use the useEffect Hook and the localStorage property to ensure that the contents of the cart are preserved even if the browser is closed.

*/

import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'


function App() {
  
  const savedCart = localStorage.getItem('cart')
  const initialCart = savedCart ? JSON.parse(savedCart) : []

  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
 

  return (
    <div className='global_layout'>
      <Banner />
      <div className='layout_inner'>
        <Cart cart={cart} setCart={setCart} /> 
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App