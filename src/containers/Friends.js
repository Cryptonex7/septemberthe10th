import React, { Component } from 'react';
import Card from './Card';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";


import '../css/Friends.css';




class MainContainer extends Component {

    constructor() {
        super();
        this.state = { 
            height: window.innerHeight, 
            width: window.innerWidth,
            title: 'no title',
            friend: {
                Shivangi : {
                name: 'Shivangi',
                image: `${cat1}`,
                message: "I have no words, no song or poem to describe our friendship and my love for you Because i have seen no one else like us. You were my first friend, the first one to bear my unbearable behaviour. You have always been there for me even though I have not been the best of myself ever. No one has made me cry as much as you have ,when you were crying or you were in pain. Also I have seen no one else with your crying capacity as well. It’s your birthday today and I know we still are going to just sleep at our place but I ll try my best to make this special. I know we will always be like this or even better if that’s possible. Also with our taste of guys, we are probably marrying each other at the end, so here is to our marriage, I love you wifeeyyy !",
                },
                Vaibhav: {
                name: 'Vaibhav',
                image: `${cat2}`,
                message: "Heyy bharii huii! Happy birthdaayyy My time pass in college 8 saal se chep h tu 🤦🏻‍ topper kahinki But you know you’re like my only true friend jiske koi befaltu ke drame nhi jaise bolo krleti h😂 Humari bachpan ki baatein😆😂😂 And i never said this but you’re the onlyy best friend i have in my life right now! I still remember humari 9th 10th ki baatein😂 fir 11th mei jab tu gyi to kitna naraaz hua tha mai! Kitna bola tha mat jaa mat jaa😂 but waqt ne kia ye haseen sitamb ki hum college mei saath aagye (Jo maine pehle hi bola tha) 😂😂 coz i knew we were inseparable❤ I love you bharii huii😘 thankyou so much for being there for me always❤",
                },
                Anujeet :{
                name: 'Anujeet',
                image: `${cat3}`,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id bibendum diam. Suspendisse ultricies volutpat leo, pharetra molestie tortor volutpat interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed placerat varius accumsan. Curabitur ut rutrum neque. Cras congue felis aliquam ex pulvinar vulputate. Suspendisse imperdiet, enim vitae feugiat pulvinar, orci sapien tincidunt est, ac viverra velit mauris interdum tortor. Etiam id nisl purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et tellus volutpat, eleifend turpis sed, porttitor tortor. In viverra, diam vitae tempus feugiat, mauris odio rhoncus justo, non dictum turpis augue eget nisi. Cras et justo tortor. Nulla suscipit velit dictum nisi feugiat congue. In pellentesque accumsan arcu nec convallis. Nullam consequat lectus at ipsum tincidunt, ut feugiat odio eleifend. Donec sit amet sapien vehicula, vulputate massa vel, sagittis augue.",
                }
            },
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);

    }
    
    
    updateDimensions = () => {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth
        });
    }


    
    render(){
        
        
        return(
            
            <div className="maincont">
                    <Card person = {this.state.friend.Shivangi}/>
                    <Card person = {this.state.friend.Vaibhav}/>
                    <Card person = {this.state.friend.Anujeet}/>
                
            </div>
            
            
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
   
}

export default MainContainer;

    