import React from 'react';
import '../../css/NavBar.css';


class GalNav extends React.Component{
    constructor(){
        super();
        
    }
    
        
    componentDidMount(){
        console.log("mount");

        console.log(this.props.stateval);

    }
    

    render(){

        const navActive=()=>{
            let a = document.getElementById("gal");
            let b = document.getElementById("shivangi");
            let c = document.getElementById("anujeet");
            let d = document.getElementById("vaibhav");
            let e = document.getElementById("us");
            let f = document.getElementById("mon");
            let g = document.getElementById("all");
            console.log(this.props.stateval);
            switch(this.props.stateval){
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
                
            }
        }
    console.log("render: "+this.props.stateval);
    console.log(this.a);
       navActive();
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