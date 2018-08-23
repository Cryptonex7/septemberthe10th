import React, {Component} from'react';
import Button from  '../Home/Button/Button';
import Tile from  './Tile';

import sb from "../../assets/Love/Blurs/Sblur.jpg";
import ab from "../../assets/Love/Blurs/Ablur.jpg";
import vb from "../../assets/Love/Blurs/Vblur.jpg";
import mb from "../../assets/Love/Blurs/Mblur.jpg";
import ub from "../../assets/Love/Blurs/Ublur.jpg";

class GalleryHome extends Component {

    
    render(){

        return(
            <div>
                <div className='gal-top'>
                    <div className='btn shivangi'>
                        <Tile click={()=>{this.props.upstate("shivangi")}} bkg={sb} btnText='Memories with Shivangi'/>            
                    </div>
                    <div className='btn anujeet'>
                        <Tile click={()=>{this.props.upstate("anujeet")}} bkg={ab} btnText='Memories with Anujeet'/>            
                    </div>
                    <div className='btn vaibhav'>
                        <Tile click={()=>{this.props.upstate("vaibhav")}} bkg={vb} btnText='Memories with Vaibhav'/>            
                    </div>
                </div>
                
                <div className='gal-bottom'>
                    <div className='btn us'>
                        <Tile click={()=>{this.props.upstate("us")}} bkg={ub} btnText='Memories with Us Together'/>            
                    </div>
                    <div className='btn mon'>
                        <Tile click={()=>{this.props.upstate("mon")}} bkg={mb} btnText='Photos of Mansi'/>            
                    </div>
                </div>
                
                <div className='gal-foot'>
                    <div className='btn all'>
                        <Button click={()=>{this.props.upstate("all")}} btnText='All Photos'/>            
                    </div>
                </div>
            </div>
        );
    };


}

export default GalleryHome;