import React, {Component} from'react';

class Card extends Component {
    render(){

        return(
            <div className="AboutBar">
                    <div className="bar">
                        <div className="about-content">
                            {this.props.person.name}<br/><br/>
                            <img src={this.props.person.image} className="image"/><br/><br/>
                            {this.props.person.message}<br/>

                        </div>
                    </div>
                
            </div>
        );
    };


}

export default Card;