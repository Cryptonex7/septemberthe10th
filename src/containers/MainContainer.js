import React, { Component } from 'react';
import BackgroundLogo from '../components/Home/BackgroundLogo/BackgroundLogo';
import StartButton from '../components/Home/StartButton/StartButton';
import Footer from './Footer';



class MainContainer extends Component {
    constructor() {
        super();
        this.state = { 
          height: window.innerHeight, 
          width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth
        });
    }
    
    render(){
        
    
        
        return(
            
                <div className="maincont">
                {this.state.width > 1000
                ?   <div>
                        
                        <BackgroundLogo/><br/>
                        <StartButton/>
                        <Footer/>
                    </div>
                :
                    <div>
                        <BackgroundLogo/>
                        <StartButton/>
                        <Footer/>
                    </div>
                }
                </div>
            
            
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    
   
}

export default MainContainer;



    
    