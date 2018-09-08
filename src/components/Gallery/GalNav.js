import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import '../../css/NavBar.css';

class GalNav extends React.Component{
    render(){  
        return(
            <div className="gal-nav ph5-ns">
            
                <div className="page-title v-mid">
                    #<span className="gray-text">Memories</span>of<span className="red-text">Friendship</span>
                </div>
                
                <div className="link-container v-mid">
                    <NavLink to='/gallery'  
                        className="link dim mr4-ns nav-active"  
                        activeClassName="link-active nav-active"
                        id='gal'        
                        onClick={()=>{this.props.pagechange('gal')}} >      
                        Albums          
                    </NavLink>
                    <Link  to='/gallery/shivangi'
                        className="link dim mr4-ns"             
                        id='shivangi'   
                        onClick={()=>{this.props.pagechange('shivangi')}} > 
                        Shivangi        
                    </Link>
                    <Link  to='/gallery/anujeet'
                        className="link dim mr4-ns"             
                        id='anujeet'    
                        onClick={()=>{this.props.pagechange('anujeet')}} >  
                        Anujeet         
                    </Link>
                    <Link  to='/gallery/vaibhav'
                        className="link dim"                    
                        id='vaibhav'    
                        onClick={()=>{this.props.pagechange('vaibhav')}} >  
                        Vaibhav         
                    </Link>
                    <Link  to='/gallery/us'
                        className="link dim"                    
                        id='us'         
                        onClick={()=>{this.props.pagechange('us')}} >       
                        Us Together     
                    </Link>
                    <Link  to='/gallery/mansi'
                        className="link dim"                    
                        id='mon'        
                        onClick={()=>{this.props.pagechange('mon')}} >      
                        Photos of Mansi 
                    </Link>
                    <Link  to='/gallery/all'
                        className="link dim"                    
                        id='all'        
                        onClick={()=>{this.props.pagechange('all')}} >      
                        All Photos      
                    </Link>
                </div>
            </div>
        );
    }
}

export default GalNav; 