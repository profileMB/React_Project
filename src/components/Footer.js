/*---Footer----
-This code defines a component with an input field for entering an email address.
-When the 'Send' button is clicked, it checks if the entered email contains the '@' symbol.
-If the email address is invalid, a pop-up alert is displayed.
-If the email address is valid, it is logged in the console (and we could store it in a DB in a future phase of the project).
*/

import { useState } from 'react'
import logo from '../assets/plant_icon.png'
import '../styles/Footer.css'


function Footer() {
  
    const [email, setEmail] = useState("")
   
    function handleSubmit() { 
        // We don't use e.preventDefault because there are no form submission actions
        const isEmailValid = email.includes('@')

        if (!isEmailValid) {
            alert("adresse e-mail invalide")
            return 
        }

        const formData = {email}
        console.log(formData)
    }
    

    return (
        <footer className='footer_style'>
            <div className='footer_div'>
                <div className='footer_intro'>
                    <p className='footer_intro_text'>Passionné(e) de plantes? Restons en contact!</p>
                    <img src={logo} className='footer_logo' alt='plant_logo' />
                </div>
                <div className='footer_email'> 
                    <p>Laissez-nous votre e-mail :</p>
                    <input className='email_input'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='email_button' onClick={handleSubmit}>Envoyer</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer