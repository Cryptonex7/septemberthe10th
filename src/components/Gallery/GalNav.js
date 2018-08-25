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
                    <a  className="link dim mr4-ns nav-active"  id='gal'        onClick={()=>{this.props.pagechange('gal')}} >Albums</a>
                    <a  className="link dim mr4-ns"             id='shivangi'   onClick={()=>{this.props.pagechange('shivangi')}} >Shivangi</a>
                    <a  className="link dim mr4-ns"             id='anujeet'    onClick={()=>{this.props.pagechange('anujeet')}} >Anujeet</a>
                    <a  className="link dim"                    id='vaibhav'    onClick={()=>{this.props.pagechange('vaibhav')}} >Vaibhav</a>
                    <a  className="link dim"                    id='us'         onClick={()=>{this.props.pagechange('us')}} >Us Together</a>
                    <a  className="link dim"                    id='mon'        onClick={()=>{this.props.pagechange('mon')}} >Photos of Mansi</a>
                    <a  className="link dim"                    id='all'        onClick={()=>{this.props.pagechange('all')}} >All Photos</a>
                </div>
            </div>
        );
    }
}

export default GalNav; 