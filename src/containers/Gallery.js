import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Gallery from 'react-photo-gallery';
import Button from '../components/Home/Button/Button';
import GalleryHome from '../components//Gallery/GalleryHome';
import Shivangi from '../components//Gallery/Shivangi';
import Anujeet from '../components//Gallery/Anujeet';
import Vaibhav from '../components//Gallery/Vaibhav';
import Us from '../components//Gallery/Us';
import Mon from '../components//Gallery/Mon';
import All from '../components//Gallery/All';
import GalNav from '../components//Gallery/GalNav';

import s1 from "../assets/Love/Shivangi/s1.jpg";
import s2 from "../assets/Love/Shivangi/s2.jpg";
import s3 from "../assets/Love/Shivangi/s3.jpg";
import s4 from "../assets/Love/Shivangi/s4.jpg";
import s5 from "../assets/Love/Shivangi/s5_4x3.jpg";
import s6 from "../assets/Love/Shivangi/s6.jpg";
import s7 from "../assets/Love/Shivangi/s7_3x4.jpg";
import s8 from "../assets/Love/Shivangi/s8_3x4.jpeg";

import a1 from "../assets/Love/Anujeet/a1.jpg";
import a2 from "../assets/Love/Anujeet/a2_4x3.jpg";
import a3 from "../assets/Love/Anujeet/a3_16x9.jpg";
import a4 from "../assets/Love/Anujeet/a4_4x3.jpg";
import a5 from "../assets/Love/Anujeet/a5.jpg";
import a6 from "../assets/Love/Anujeet/a6.jpg";
import a7 from "../assets/Love/Anujeet/a7_4x5.jpg";
import a8 from "../assets/Love/Anujeet/a8_4x3.jpg";
import a9 from "../assets/Love/Anujeet/a9_3x4.jpg";
import a10 from "../assets/Love/Anujeet/a10_9x16.jpg";
import a11 from "../assets/Love/Anujeet/a11_4x5.jpg";

import v1 from "../assets/Love/Vaibhav/v1_9x16.jpg";
import v2 from "../assets/Love/Vaibhav/v2_9x16.jpg";
import v3 from "../assets/Love/Vaibhav/v3.jpg";
import v4 from "../assets/Love/Vaibhav/v4_9x16.jpg";
import v5 from "../assets/Love/Vaibhav/v5_4x5.jpg";
import v6 from "../assets/Love/Vaibhav/v6_9x16.jpg";
import v7 from "../assets/Love/Vaibhav/v7_4x5.jpg";
import v8 from "../assets/Love/Vaibhav/v8_9x16.jpg";
import v9 from "../assets/Love/Vaibhav/v9_9x16.jpg";
import v10 from"../assets/Love/Vaibhav/v10.jpg";

import m1 from "../assets/Love/Mon/m1.jpg";
import m2 from "../assets/Love/Mon/m2_3x4.jpg";
import m3 from "../assets/Love/Mon/m3_4x3.jpg";
import m4 from "../assets/Love/Mon/m4_9x16.jpg";
import m5 from "../assets/Love/Mon/m5.jpg";
import m6 from "../assets/Love/Mon/m6.jpg";
import m7 from "../assets/Love/Mon/m7_3x4.jpeg";
import m8 from "../assets/Love/Mon/m8_3x4.jpg";
import m9 from "../assets/Love/Mon/m9.jpg";
import m10 from"../assets/Love/Mon/m10_4x5.png";

import u1 from "../assets/Love//Us/u1.jpg";
import u2 from "../assets/Love//Us/u2_16x9.jpg";
import u3 from "../assets/Love//Us/u3_3x4.jpg";
import u4 from "../assets/Love//Us/u4_3x2.jpg";

import sb from "../assets/Love/Blurs/Sblur.jpg";
import ab from "../assets/Love/Blurs/Ablur.jpg";
import vb from "../assets/Love/Blurs/Vblur.jpg";
import mb from "../assets/Love/Blurs/Mblur.jpg";
import ub from "../assets/Love/Blurs/Ublur.jpg";


import '../css/Gallery.css';

export default class Sample extends React.Component {
    constructor() {
        super();
        this.state = { 
          page: 'gal'
        };
        this.updateState = this.updateState.bind(this);
        let a = document.getElementById("gal");
        let b = document.getElementById("shivangi");
        let c = document.getElementById("anujeet");
        let d = document.getElementById("vaibhav");
        let e = document.getElementById("us");
        let f = document.getElementById("mon");
        let g = document.getElementById("all");
     
        this.galref = React.createRef();
        this.shivangiref = React.createRef();
        this.anujeetref = React.createRef();
        this.vaibhavref = React.createRef();
        this.usref = React.createRef();
        this.monref = React.createRef();
        this.allref = React.createRef();
    
    }

    

    updateState =(statevar)=>{
        this.setState({page: `${statevar}`});
    }

    returnState=()=>{
        return this.state.page;
    }
   
    navChangePageGal = ()=> {
        this.setState({page: 'gal'});
        // let a = document.getElementById("gal");
        // let b = document.getElementById("shivangi");
        // let c = document.getElementById("anujeet");
        // let d = document.getElementById("vaibhav");
        // let e = document.getElementById("us");
        // let f = document.getElementById("mon");
        // let g = document.getElementById("all");

		// this.galref.classList.add("nav-active");
		// this.shivangiref.classList.remove("nav-active");
		// this.anujeetref.classList.remove("nav-active");
		// this.vaibhavref.classList.remove("nav-active");
		// this.usref.classList.remove("nav-active");
		// this.monref.classList.remove("nav-active");
		// this.allref.classList.remove("nav-active");
    }
    navChangePageShivangi = ()=> {
        this.setState({page: 'shivangi'})
    
        // let a = document.getElementById("gal");
        // let b = document.getElementById("shivangi");
        // let c = document.getElementById("anujeet");
        // let d = document.getElementById("vaibhav");
        // let e = document.getElementById("us");
        // let f = document.getElementById("mon");
        // let g = document.getElementById("all");

        // this.galref.classList.remove("nav-active");
		// this.shivangiref.classList.add("nav-active");
		// this.anujeetref.classList.remove("nav-active");
		// this.vaibhavref.classList.remove("nav-active");
		// this.usref.classList.remove("nav-active");
		// this.monref.classList.remove("nav-active");
		// this.allref.classList.remove("nav-active");
    }
    navChangePageAnujeet = ()=> {
        this.setState({page: 'anujeet'})
    
		// this.a.classList.remove("nav-active");
		// this.b.classList.remove("nav-active");
		// this.c.classList.add("nav-active");
		// this.d.classList.remove("nav-active");
		// this.e.classList.remove("nav-active");
		// this.f.classList.remove("nav-active");
		// this.g.classList.remove("nav-active");
    }
    navChangePageVaibhav = ()=> {
        this.setState({page: 'vaibhav'})
    
	// 	this.a.classList.remove("nav-active");
	// 	this.b.classList.remove("nav-active");
	// 	this.c.classList.remove("nav-active");
	// 	this.d.classList.add("nav-active");
	// 	this.e.classList.remove("nav-active");
	// 	this.f.classList.remove("nav-active");
	// 	this.g.classList.remove("nav-active");
    }
    navChangePageUS = ()=> {
        this.setState({page: 'us'})
    
		// this.a.classList.remove("nav-active");
		// this.b.classList.remove("nav-active");
		// this.c.classList.remove("nav-active");
		// this.d.classList.remove("nav-active");
		// this.e.classList.add("nav-active");
		// this.f.classList.remove("nav-active");
		// this.g.classList.remove("nav-active");
    }
    navChangePageMon = ()=> {
        this.setState({page: 'mon'})
    
		// this.a.classList.remove("nav-active");
		// this.b.classList.remove("nav-active");
		// this.c.classList.remove("nav-active");
		// this.d.classList.remove("nav-active");
		// this.e.classList.remove("nav-active");
		// this.f.classList.add("nav-active");
		// this.g.classList.remove("nav-active");
    }
    navChangePageAll = ()=> {
        this.setState({page: 'all'})
    
		// this.a.classList.remove("nav-active");
		// this.b.classList.remove("nav-active");
		// this.c.classList.remove("nav-active");
		// this.d.classList.remove("nav-active");
		// this.e.classList.remove("nav-active");
		// this.f.classList.remove("nav-active");
		// this.g.classList.add("nav-active");
    }
    
	GAL_STATES = {
		gal: <GalleryHome upstate={this.updateState}/>,
		shivangi: <Shivangi />,
        anujeet: <Anujeet />,
        vaibhav: <Vaibhav/>,
        us: <Us/>,
        mon: <Mon/>,
        all: <All/>
	};

    render() {
        return(
            <div className="maincont">
                <GalNav stateval = {this.returnState}
                        gal={this.navChangePageGal} 
                        shivangi={this.navChangePageShivangi} 
                        anujeet={this.navChangePageAnujeet}
                        vaibhav={this.navChangePageVaibhav}
                        mon={this.navChangePageMon}
                        us = {this.navChangePageUS}
                        all= {this.navChangePageAll}

                        galref={this.galref} 
                        shivangiref={this.shivangiref} 
                        anujeetref={this.anujeetref}
                        vaibhavref={this.vaibhavref}
                        monref={this.monref}
                        usref = {this.usref}
                        allref= {this.allref}
                        />
                {this.state.page === 'gal'
                ?   <div>
                        {this.GAL_STATES[this.state.page]}
                    </div>
                :
                    <div>
                        <Button click={this.navChangePageGal} btnText='Back to Albums'/>
                        {this.GAL_STATES[this.state.page]}
                    </div>
                }
            </div>
        );
    //     if(this.state.page === 'gal'){
    //         return (
                
    //             <div className='gallery'>
                    {/* <GalNav gal={this.navChangePageGal} 
                            shivangi={this.navChangePageShivangi} 
                            anujeet={this.navChangePageAnujeet}
                            vaibhav={this.navChangePageVaibhav}
                            us = {this.navChangePageUS}
                            all= {this.navChangePageAll}
                            /> */}
    //                 <div className='gal-top'>
    //                     <div className='btn shivangi'>
    //                         <Button click={this.navChangePageShivangi} bkg={sb} btnText='Memories with Shivangi'/>            
    //                     </div>
    //                     <div className='btn anujeet'>
    //                         <Button click={this.navChangePageAnujeet} bkg={ab} btnText='Memories with Anujeet'/>            
    //                     </div>
    //                     <div className='btn vaibhav'>
    //                         <Button click={this.navChangePageVaibhav} bkg={vb} btnText='Memories with Vaibhav'/>            
    //                     </div>
    //                 </div>
    //                 <div className='gal-bottom'>
    //                     <div className='btn us'>
    //                         <Button click={this.navChangePageUS} bkg={ub} btnText='Memories with Us Together'/>            
    //                     </div>
    //                     <div className='btn mon'>
    //                         <Button click={this.navChangePageMon} bkg={mb} btnText='Photos of Mansi'/>            
    //                     </div>
    //                 </div>
                    
    //                 <div className='gal-foot'>
    //                     <div className='btn all'>
    //                         <Button click={this.navChangePageAll} btnText='All Photos'/>            
    //                     </div>
    //                 </div>
    //             </div>
    //                 //<Gallery photos={ALL} />
                
    //         );
    //     }
    //     else if(this.state.page === 'shivangi'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={SHIVANGI} />
    //             </div>
    //         );
    //     }
    //     else if(this.state.page === 'anujeet'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={ANUJEET} />
    //             </div>
    //         );
    //     }
    //     else if(this.state.page === 'vaibhav'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={VAIBHAV} />
    //             </div>
    //         );
    //     }
    //     else if(this.state.page === 'us'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={US} />
    //             </div>
    //         );
    //     }
    //     else if(this.state.page === 'mon'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={MON} />
    //             </div>
    //         );
    //     }
    //     else if(this.state.page === 'all'){
    //         return (
    //             <div>
    //                 <Button onClick={this.navChangePageGal()} btnText='Back to Albums'/>
    //                 <Gallery photos={ALL} />
    //             </div>
    //         );
    //     }
        
        
    }
}
const SHIVANGI = [
  {
    src: `${s1}`,
    width: 1,
    height: 1
  },
  {
    src: `${s2}`,
    width: 1,
    height: 1
  },
  {
    src: `${s3}`,
    width: 1,
    height: 1
  },
  {
    src: `${s4}`,
    width: 1,
    height: 1
  },
  {
    src: `${s5}`,
    width: 4,
    height: 3
  },
  {
    src: `${s6}`,
    width: 1,
    height: 1
  },
  {
    src: `${s7}`,
    width: 3,
    height: 4
  },
  {
    src: `${s8}`,
    width: 3,
    height: 4
  }

];


const VAIBHAV = [
    {
      src: `${v1}`,
      width: 9,
      height: 16
    },
    {
      src: `${v2}`,
      width: 9,
      height: 16
    },
    {
      src: `${v3}`,
      width: 1,
      height: 1
    },
    {
      src: `${v4}`,
      width: 9,
      height: 16
    },
    {
      src: `${v5}`,
      width: 4,
      height: 5
    },
    {
      src: `${v6}`,
      width: 9,
      height: 16
    },
    {
      src: `${v7}`,
      width: 4,
      height: 5
    },
    {
      src: `${v8}`,
      width: 9,
      height: 16
    },
    {
      src: `${v9}`,
      width: 9,
      height: 16
    },
    {
      src: `${v10}`,
      width: 1,
      height: 1
    }
  
  ];

  
const ANUJEET = [
    {
      src: `${a1}`,
      width: 1,
      height: 1
    },
    {
      src: `${a2}`,
      width: 4,
      height: 3
    },
    {
      src: `${a3}`,
      width: 16,
      height: 9
    },
    {
      src: `${a4}`,
      width: 4,
      height: 3
    },
    {
      src: `${a5}`,
      width: 1,
      height: 1
    },
    {
      src: `${a6}`,
      width: 1,
      height: 1
    },
    {
      src: `${a7}`,
      width: 4,
      height: 5
    },
    {
      src: `${a8}`,
      width: 4,
      height: 3
    },
    {
      src: `${a9}`,
      width: 3,
      height: 4
    },
    {
      src: `${a10}`,
      width: 9,
      height: 16
    },
    {
      src: `${a11}`,
      width: 4,
      height: 5
    }
  
  ];

  
const MON = [
    {
      src: `${m1}`,
      width: 1,
      height: 1
    },
    {
      src: `${m2}`,
      width: 3,
      height: 4
    },
    {
      src: `${m3}`,
      width: 4,
      height: 3
    },
    {
      src: `${m4}`,
      width: 9,
      height: 16
    },
    {
      src: `${m5}`,
      width: 1,
      height: 1
    },
    {
      src: `${m6}`,
      width: 1,
      height: 1
    },
    {
      src: `${m7}`,
      width: 3,
      height: 4
    },
    {
      src: `${m8}`,
      width: 3,
      height: 4
    },
    {
      src: `${m9}`,
      width: 1,
      height: 1
    },
    {
      src: `${m10}`,
      width: 4,
      height: 5
    }
  
  ];

  
const US = [
    {
      src: `${u1}`,
      width: 1,
      height: 1
    },
    {
      src: `${u2}`,
      width: 16,
      height: 9
    },
    {
      src: `${u3}`,
      width: 3,
      height: 4
    },
    {
      src: `${u4}`,
      width: 3,
      height: 2
    }  
  ];
  const ALL = [

    {
        src: `${u1}`,
        width: 1,
        height: 1
    },
    {
        src: `${u2}`,
        width: 16,
        height: 9
    },
    {
        src: `${u3}`,
        width: 3,
        height: 4
    },
    {
        src: `${u4}`,
        width: 3,
        height: 2
    },
    {
        src: `${m1}`,
        width: 1,
        height: 1
    },
    {
        src: `${m2}`,
        width: 3,
        height: 4
    },
    {
        src: `${m3}`,
        width: 4,
        height: 3
    },
    {
        src: `${m4}`,
        width: 9,
        height: 16
    },
    {
        src: `${m5}`,
        width: 1,
        height: 1
    },
    {
        src: `${m6}`,
        width: 1,
        height: 1
    },
    {
        src: `${m7}`,
        width: 3,
        height: 4
    },
    {
        src: `${m8}`,
        width: 3,
        height: 4
    },
    {
        src: `${m9}`,
        width: 1,
        height: 1
    },
    {
        src: `${m10}`,
        width: 4,
        height: 5
    },
    {
        src: `${a1}`,
        width: 1,
        height: 1
    },
    {
        src: `${a2}`,
        width: 4,
        height: 3
    },
    {
        src: `${a3}`,
        width: 16,
        height: 9
    },
    {
        src: `${a4}`,
        width: 4,
        height: 3
    },
    {
        src: `${a5}`,
        width: 1,
        height: 1
    },
    {
        src: `${a6}`,
        width: 1,
        height: 1
    },
    {
        src: `${a7}`,
        width: 4,
        height: 5
    },
    {
        src: `${a8}`,
        width: 4,
        height: 3
    },
    {
        src: `${a9}`,
        width: 3,
        height: 4
    },
    {
        src: `${a10}`,
        width: 9,
        height: 16
    },
    {
        src: `${a11}`,
        width: 4,
        height: 5
    },
    {
        src: `${v1}`,
        width: 9,
        height: 16
    },
    {
        src: `${v2}`,
        width: 9,
        height: 16
    },
    {
        src: `${v3}`,
        width: 1,
        height: 1
    },
    {
        src: `${v4}`,
        width: 9,
        height: 16
    },
    {
        src: `${v5}`,
        width: 4,
        height: 5
    },
    {
        src: `${v6}`,
        width: 9,
        height: 16
    },
    {
        src: `${v7}`,
        width: 4,
        height: 5
    },
    {
        src: `${v8}`,
        width: 9,
        height: 16
    },
    {
        src: `${v9}`,
        width: 9,
        height: 16
    },
    {
        src: `${v10}`,
        width: 1,
        height: 1
    },
    {
        src: `${s1}`,
        width: 1,
        height: 1
    },
    {
        src: `${s2}`,
        width: 1,
        height: 1
    },
    {
        src: `${s3}`,
        width: 1,
        height: 1
    },
    {
        src: `${s4}`,
        width: 1,
        height: 1
    },
    {
        src: `${s5}`,
        width: 4,
        height: 3
    },
    {
        src: `${s6}`,
        width: 1,
        height: 1
    },
    {
        src: `${s7}`,
        width: 3,
        height: 4
    },
    {
        src: `${s8}`,
        width: 3,
        height: 4
    }
    
  ];



