import React, {Component} from'react';
import Button from  '../Home/Button/Button';
import Shivangi from'./Shivangi';
import Anujeet from './Anujeet';
import Vaibhav from './Vaibhav';
import Us from      './Us';
import Mon from     './Mon';
import All from     './All';

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
                        <Button click={()=>{this.props.upstate("shivangi")}} bkg={sb} btnText='Memories with Shivangi'/>            
                    </div>
                    <div className='btn anujeet'>
                        <Button click={()=>{this.props.upstate("anujeet")}} bkg={ab} btnText='Memories with Anujeet'/>            
                    </div>
                    <div className='btn vaibhav'>
                        <Button click={()=>{this.props.upstate("vaibhav")}} bkg={vb} btnText='Memories with Vaibhav'/>            
                    </div>
                </div>
                
                <div className='gal-bottom'>
                    <div className='btn us'>
                        <Button click={()=>{this.props.upstate("us")}} bkg={ub} btnText='Memories with Us Together'/>            
                    </div>
                    <div className='btn mon'>
                        <Button click={()=>{this.props.upstate("mon")}} bkg={mb} btnText='Photos of Mansi'/>            
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