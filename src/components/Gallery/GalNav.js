import React from 'react';
import '../../css/NavBar.css';


class GalNav extends React.Component{
    constructor(props) {
        super();
        this.state={
            page: `${props.stateval()}`
        }
        console.log(props.stateval());
    }

    
    render(){
        return(
            <div className="nav ph5-ns">
            
                <div className="page-title v-mid">
                    #<span className="gray-text">Memories</span>of<span className="red-text">Friendship</span>
                </div>
                
                
                <div className="link-container v-mid">
                    <a ref={this.props.galref} className="link dim mr4-ns nav-active" id='gal' onClick={this.props.gal} >Albums</a>
                    <a ref={this.props.shivangiref} className="link dim mr4-ns"  id='shivangi' onClick={this.props.shivangi} >Shivangi</a>
                    <a ref={this.props.anujeetref} className="link dim mr4-ns"  id='anujeet'   onClick={this.props.anujeet} >Anujeet</a>
                    <a ref={this.props.vaibhavref} className="link dim"         id='vaibhav'   onClick={this.props.vaibhav} >Vaibhav</a>
                    <a ref={this.props.usref} className="link dim"         id='us'             onClick={this.props.us} >Us Together</a>
                    <a ref={this.props.monref} className="link dim"         id='mon'           onClick={this.props.mon} >Photos of Mansi</a>
                    <a ref={this.props.allref} className="link dim"         id='all'           onClick={this.props.all} >All Photos</a>
                </div>
            </div>

        );
    }
}

export default GalNav; 