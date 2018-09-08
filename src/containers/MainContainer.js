import React, { Component } from 'react';
import BackgroundLogo from '../components/Home/BackgroundLogo/BackgroundLogo';
import Midder from './Midder';

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
        window.scrollTo(0, 0)
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
                    <br/><br/>
                    <Midder NextButton={this.props.friends}/>
                </div>
            :
                <div>
                    <BackgroundLogo/><br/>
                    <Midder NextButton={()=>{this.props.friends()}}/>
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



    
    