import React, { Component } from 'react';
import Button from '../components/Home/Button/Button';
import GalRouter from './GalRouter';

import GalNav from '../components//Gallery/GalNav';

import '../css/Gallery.css';

export default class GalleryPage extends Component {
    constructor() {
        super();
        this.state = { 
          page: 'gal'
        };
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    navActive=(valstate)=>{
        let a = document.getElementById("gal");
        let b = document.getElementById("shivangi");
        let c = document.getElementById("anujeet");
        let d = document.getElementById("vaibhav");
        let e = document.getElementById("us");
        let f = document.getElementById("mon");
        let g = document.getElementById("all");
        switch(valstate){
            case "gal":     a.classList.add("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.remove("nav-active");
                            break;

            case "shivangi":a.classList.remove("nav-active");
                            b.classList.add("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.remove("nav-active");
                            break;

            case "anujeet": a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.add("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.remove("nav-active");
                            break;
            
            case "vaibhav": a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.add("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.remove("nav-active");
                            break;

            case "us":      a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.add("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.remove("nav-active");
                            break;

            case "mon":     a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.add("nav-active");
                            g.classList.remove("nav-active");
                            break;

            case "all":     a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            d.classList.remove("nav-active");
                            e.classList.remove("nav-active");
                            f.classList.remove("nav-active");
                            g.classList.add("nav-active");
                            break;
            default: console.log("Invalid State Value. State = " + valstate);
        }
    }

    updateState =(statevar)=>{
        this.setState({page: `${statevar}`});
        this.navActive(`${statevar}`);
    }
    
	// GAL_STATES = {
	// 	gal:        <GalleryHome upstate={this.updateState}/>,
	// 	shivangi:   <Shivangi />,
    //     anujeet:    <Anujeet />,
    //     vaibhav:    <Vaibhav/>,
    //     us:         <Us/>,
    //     mon:        <Mon/>,
    //     all:        <All/>
    // };
    

    render() {
        return(
            <div className="maincont">
                <GalNav pagechange={this.updateState}/>
                {this.state.page === 'gal'
                ?   <div>
                        <GalRouter upstate={this.updateState}/>
                        {/* {this.GAL_STATES[this.state.page]} */}
                        <Button route='/' click={()=>{this.props.home('home')}} btnText='Back to Home'/>
                    </div>
                :
                    <div>
                        <Button route='/gallery' Classname='sticky' click={()=>{this.updateState('gal')}} btnText='Back to Albums'/>
                        <GalRouter upstate={this.updateState}/>
                        {/* {this.GAL_STATES[this.state.page]} */}
                    </div>
                }
            </div>
        );
    }
}