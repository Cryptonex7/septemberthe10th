import React, {Component} from'react';
import '../css/Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props);
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
            <div className="Footer">
                
                <div className="top">
                    <p className="col1 col">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis porttitor enim vulputate maximus. Vivamus vitae eros quis sem fringilla elementum. Vestibulum eget lacus nunc. Etiam viverra interdum lectus, vel imperdiet lorem commodo sed. Vestibulum sollicitudin leo sit amet est maximus tempor. Aliquam feugiat condimentum leo at semper. Pellentesque laoreet et nulla ac iaculis. Mauris laoreet posuere nunc et commodo. Cras dapibus consequat elit nec venenatis. Vestibulum vulputate eleifend eros ac egestas. Nulla ut tellus dictum, egestas urna sit amet, laoreet erat.</p>
                    <div className="img col"></div>
                    <p className="col2 col">Duis facilisis ligula quis rutrum maximus. Curabitur tincidunt lectus eu diam pellentesque dignissim. Phasellus ultrices odio nisl, in volutpat est pulvinar nec. Donec eu sodales diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum varius dolor sed risus dignissim faucibus. Donec eget dictum nibh, ac iaculis lectus. In viverra congue eros ut interdum. Etiam faucibus et nisi ut tristique. Integer maximus enim quis est facilisis, quis ornare arcu auctor. Aenean ac vestibulum elit, at efficitur lectus. Mauris ac auctor mi. Nunc commodo porta suscipit. In molestie enim diam, in pretium enim finibus a.</p>

                </div>
                <div className="bottom">
                    
                </div>
            </div>
        );
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Footer;