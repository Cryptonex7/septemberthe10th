import React from 'react';
import { Link } from 'react-router-dom';

import '../../../css/NavBar.css';

const NavBar = ({upstate}) => {
  return(
    <div className="nav ph5-ns">
		<div className="page-title v-mid">
			#<span className="gray-text">September</span>the<span className="red-text">10th</span>
		</div>
		<div className="link-container v-mid">
			<Link to= '/'
				className="link dim mr4-ns nav-active"   
				id='home'       
				onClick={()=>{upstate('home')}} >Home         
			</Link>
			<Link to= '/friends'
				className="link dim mr4-ns"              
				id='friends'    
				onClick={()=>{upstate('friends')}} >Friends
			</Link>
			<Link to= '/gallery'
				className="link dim"                     
				id='gallery'    
				onClick={()=>{upstate('gallery')}} >Gallery
			</Link>
		</div>
    </div>
  );
}

export default NavBar; 