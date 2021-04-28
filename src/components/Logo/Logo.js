import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
const Logo=()=>{
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"><img src="https://www.freeiconspng.com/uploads/brain-gears-icon-png-33.png" alt='logo'/></div>
			</Tilt>
		</div>
	);
}

export default Logo;