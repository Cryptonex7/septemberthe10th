import React, {Component} from'react';

class Card extends Component {
    render(){
        return(
            <div className="Card">
                <div className="bar">
                    <div className="content">
                        <div className='name'>
                            {this.props.person.name}
                        </div><br/>
                        <img src={this.props.person.image} alt={`${this.props.person.name}`} className="image"/><br/><br/>
                        {this.props.person.message}<br/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Card;