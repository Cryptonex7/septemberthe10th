import React, { Component } from 'react';
import NavBar from '../components/Home/NavBar/NavBar';
import MainContainer from './MainContainer'
import Friends from './Friends';
import GalleryPage from './GalleryPage';
import Footer from './Footer';

import '../css/App.css';
import '../css/Card.css';

class App extends Component {
  state = { 
    page: 'home'
	}
  
	PAGE_STATES = {
		home: <MainContainer friends = 	{()=>{this.updateState('friends')}} />,
		friends: <Friends gallery = 	{()=>{this.updateState('gallery')}} />,
		gallery: <GalleryPage home = 	{()=>{this.updateState('home')}} />,
	};
	
	navActive=(valstate)=>{
        let a = document.getElementById("home");
        let b = document.getElementById("friends");
        let c = document.getElementById("gallery");
        
        switch(valstate){
            case "home":    a.classList.add("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.remove("nav-active");
                            break;

            case "friends": a.classList.remove("nav-active");
                            b.classList.add("nav-active");
                            c.classList.remove("nav-active");
                            break;

            case "gallery": a.classList.remove("nav-active");
                            b.classList.remove("nav-active");
                            c.classList.add("nav-active");
                            break;
            default: console.log("Invalid State Value. State = " + valstate);
        }
	}
	
    updateState=(pageval)=>{
        this.setState({page: `${pageval}`})
        this.navActive(`${pageval}`);
	}
	
  render() {
    console.log('App render started');
    return (
				<div className="App">
					<NavBar home = {this.updateState} friends = {this.updateState} gallery = {this.updateState} />
						{this.PAGE_STATES[this.state.page]}
					<Footer/>
				</div>
    );
  }
}

export default App;
