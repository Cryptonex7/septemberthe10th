import React, { Component } from 'react';
import Card from './Card';
import Button from '../components/Home/Button/Button';
import shivImg from '../assets/Love/Shivangi/s6.jpg';
import vaibImg from "../assets/Love/Vaibhav/v10.jpg";
import anujImg from '../assets/Love/Anujeet/a7_4x5.jpg';

import '../css/Friends.css';

class MainContainer extends Component {

    constructor() {
        super();
        this.state = { 
            friend: {
                Shivangi : {
                name: 'Shivangi',
                image: `${shivImg}`,
                message: "I have no words, no song or poem to describe our friendship and my love for you Because i have seen no one else like us. You were my first friend, the first one to bear my unbearable behaviour. You have always been there for me even though I have not been the best of myself ever. No one has made me cry as much as you have ,when you were crying or you were in pain. Also I have seen no one else with your crying capacity as well. It’s your birthday today and I know we still are going to just sleep at our place but I ll try my best to make this special. I know we will always be like this or even better if that’s possible. Also with our taste of guys, we are probably marrying each other at the end, so here is to our marriage, I love you wifeeyyy !",
                },
                Vaibhav: {
                name: 'Vaibhav',
                image: `${vaibImg}`,
                message: "Heyy bharii huii! Happy birthdaayyy My time pass in college 8 saal se chep h tu 🤦🏻‍ topper kahinki But you know you’re like my only true friend jiske koi befaltu ke drame nhi jaise bolo krleti h😂 Humari bachpan ki baatein😆😂😂 And i never said this but you’re the onlyy best friend i have in my life right now! I still remember humari 9th 10th ki baatein😂 fir 11th mei jab tu gyi to kitna naraaz hua tha mai! Kitna bola tha mat jaa mat jaa😂 but waqt ne kia ye haseen sitamb ki hum college mei saath aagye (Jo maine pehle hi bola tha) 😂😂 coz i knew we were inseparable❤ I love you bharii huii😘 thankyou so much for being there for me always❤",
                },
                Anujeet :{
                name: 'Anujeet',
                image: `${anujImg}`,
                message: "Just like that time in the picture, All I wish is that you keep on Lighting up my Life with your immense awesomeness, while I will always try to protect everthing we share and never lose it from this time, till the end of times. Well, I cannot remember a single incident from my childhood without you in it, and I hope that nothing ever happens to me without you in it. We've been through so much together, we have a lot to narrate to our lil Kittens and Puppies. I wish you a really good future ahead, and may you never shed another tear in sorrow. You Deserve All The World's Happiness. Love You to the Pluto and Back XD",
                }
            },
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div>
                <div className="maincont">
                        <Card person = {this.state.friend.Shivangi}/>
                        <Card person = {this.state.friend.Vaibhav}/>
                        <Card person = {this.state.friend.Anujeet}/>
                </div>
                <Button click={()=>{this.props.gallery('gallery')}} btnText='Go to Next Section'/>
            </div>
        );
    }
}

export default MainContainer;

    