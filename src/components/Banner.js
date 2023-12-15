import logo from '../assets/plant_icon.png'
import '../styles/Banner.css'


function Banner() {

	return (
		<div className='banner_style'>
			<h1 className='title'>Plantes<span className='dot'>.</span>com</h1>
			<img src={logo} className='logo' alt='plant_logo' />
		</div>
	)
}

export default Banner

