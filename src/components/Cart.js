/*---Cart---

¤ This component enables:
- Opening and closing the cart.
- Displaying and adjusting its contents.
- Emptying the cart.

¤ When the cart is open (and contains at least one item), we display:
- Features of each added plant: photo, name, and unit price.
- Two buttons to adjust the quantity of each plant in the cart (using the 'increment'/'decrement' functions).
- Total value of each cart line, along with a delete button.
- A summary of the total cart value and the overall number of items.
- An 'Empty Cart' button to clear the entire cart by setting it to an empty array with 'setCart([])'.
- A button to close the cart.

*/


import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faTrashArrowUp, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/Cart.css'


function Cart({ cart, setCart }) {

    // We use the 'isOpen' state and the 'openCloseCart' function to open and close the cart
    const [isOpen, setIsOpen] = useState(false) 

    function openCloseCart() {
        setIsOpen (!isOpen)
    }                      


    /* The 'increment'/'decrement' functions enable the adjustment of an item's quantity in the cart.
    To do so, a copy of the cart is created, the quantity of the specified item is increased/decreased, and then the cart state is updated. */
    function increment(index) {
        const newCart = [...cart]
        newCart[index].quantity += 1
        setCart(newCart);
    }

    function decrement(index) {
        const newCart = [...cart]
        if (cart[index].quantity > 1) {
            newCart[index].quantity -= 1
        } else { // If the quantity is equal to 1, we utilize the 'splice' method to remove the item from the cart
            newCart.splice(index, 1) 
        }
        setCart(newCart)
    }

    // The 'deleteItem' function operates on the same principle as the two previous functions
    function deleteLine(index) {
        const newCart = [...cart]
        newCart.splice(index, 1) 
        setCart(newCart)
    }


    //We use the 'reduce' method on the cart array to calculate the total value of the cart and the total number of items
    const total = cart.reduce(
		(acc, item) => acc + item.quantity * item.price,
        0
	)

    const total_quantity = cart.reduce(
        (acc,item) => acc + item.quantity,
        0
    )


    return isOpen ? (
        <div className='cart_opened'>
            {cart.length > 0 ? ( // If the cart contains at least one item, we display the following rendering (see details of the cart content in the introductory comment)
                <div>
                    <h2>Panier</h2>
                    <ul className='cart_items'>
                        {cart.map(({ cover, name, price, quantity }, index) => (
                                        <div className='item' key={`${name}-${index}`}>
                                            <img className='item_cover' src={cover} alt={`${name} cover`} />
                                            <div className='item_features_div'>
                                                <p className='item_name'>{name}</p>
                                                <p className='item_price'>{price}€</p>
                                            </div>
                                            <div className='quantity_div'>
                                                <button className='adjustment_button' onClick={() => decrement(index)}>
                                                    <FontAwesomeIcon className='icon_style' icon={faCircleMinus} />
                                                </button>
                                                <span className='item_quantity'>{quantity}</span>
                                                <button className='adjustment_button' onClick={() => increment(index)}>
                                                    <FontAwesomeIcon className='icon_style' icon={faCirclePlus} />
                                                </button>
                                            </div>
                                            <div className='total_line_div'>
                                                <span className='total_line'>{price*quantity}€</span>
                                                <button className='adjustment_button' onClick={()=>deleteLine(index)}>
                                                    <FontAwesomeIcon className='icon_style' icon={faTrashArrowUp} />
                                                </button>
                                            </div>
                                        </div>
                        ))}		
                    </ul>
                    <div className='final_cart_div'>
                        <div className='total_cart_price_div'>
                            <span className='total_cart_price_text'>Total</span> 
                            <span className='total_cart_price'>{total}€</span>
                        </div>
                        <span className='total_quantity'>Plantes dans le panier : {total_quantity}</span> 
                    </div>
                    <div className='reset_cart_div'>
                        <button className='reset_cart_button' onClick={() => setCart([])}>
                            Vider le panier
                            <FontAwesomeIcon className='reset_cart_icon' icon={faTrashArrowUp} />
                        </button>
                    </div>
                    <div className='close_cart_button_div'>
                        <button className='close_cart_button' onClick={openCloseCart}>Fermer le panier</button>
                    </div>
                </div>
            ) : ( // If the cart is empty, we display the following elements
                <div>
					<h2 className='empty_cart'>Votre panier est vide</h2>
                    <div className='close_cart_button_div'>
                        <button className='close_cart_button' onClick={openCloseCart}>Fermer le panier</button>
                    </div>
				</div>
            )} 
        </div>
    ) : ( // When the cart is closed, we display in a box, the key features of the cart and a button to open it
        <div className='cart_closed'>
            <div className={`cart_key_features_div ${total_quantity === 0 ? 'hide_key_features' : ''}`}>
            <FontAwesomeIcon className='icon_cart' icon={faCartShopping} />
                <span className='total_quantity_feature'>{total_quantity}</span>
                <span className='total_price_feature'>{total}€</span> 
            </div>
            <button className='open_cart_button' onClick={openCloseCart}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart


