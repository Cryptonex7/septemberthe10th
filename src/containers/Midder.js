import React, {Component} from'react';
import Button from '../components/Home/Button/Button';

import '../css/Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className='Foot-container'>
                <br/>
                <span className='mid-head'>Hey <span className='red-text'>Mon!</span></span>
                <div className="Footer">
                    <div className="top">
                        <p className="col1 col"><br/>
                            When I wish you "<span className='red-text'>Happy Birthday</span>",<br/>
                            There's so much more I want to say,<br/>
                            Though it's hard to utter the words,<br/>
                            <span className='red-text'>Nothing's</span> going to stop me today.
                            <br/><br/>
                            When I wish you "<span className='red-text'>Happy Birthday</span>",<br/>
                            What I mean is "I love you",<br/>
                            You're more than the <span className='red-text'>world</span> to me,<br/>
                            I'm so thankful for all you do.
                            <br/><br/>
                            When I wish you "<span className='red-text'>Happy Birthday</span>", <br/>
                            It's because you make me proud,<br/>
                            Now that I've put down these words, <br/>
                            I just want to <span className='red-text'>scream</span> them out loud.<br/>
                            <br/><br/><br/>
                            - Anujeet <span className='red-text'>Chatterjee</span><br/><br/>
                        </p>

                        <div className="img col"></div>
                        
                        <p className="col2 col">
                            "I have this picture of you... It's more of a <span className='red-text'>memory</span>... <br/>
                            This is a real incident-
                            <br/><br/>
                            Way back in class 7, a few days before <br/>
                            I got slapped by you, I was doing the <br/>
                            same thing to you for which I got the <br/>
                            slap (few days later) - i.e. de-dusting <br/>
                            the duster on your head. <br/> <br/>
                            You were <span className='red-text'>friendly</span> those days - But then <br/>
                            one day while I was going to de-dust <br/>
                            the duster on your head, <br/>
                            You <span className='red-text'>sensed</span> my approach and turned back <br/>
                            with your finger pointing towards <span className='red-text'>me</span>... <br/><br/>
                            With your <span className='red-text'>eyes</span> wide open in a mixed <br/>
                            feeling of surprise and anger and irritation,<br/> 
                            with some sort of a <span className='red-text'>mischievous</span> smile on <br/>
                            your face and strands of your hair <span className='red-text'>wavering</span> <br/>
                            over your face, <br/>
                            <b>for the <span className='red-text'>first</span> time in my life I saw your <span className='red-text'>eyes</span></b>. 
                            <br/><br/>
                            Those 3-5 seconds of our eye contact felt <br/>
                            like ages to me, and I'd <span className='red-text'>never</span> forgotten <br/>
                            your eyes since that day." <br/><br/>
                        </p>
                    </div>
                </div>
           
                <Button click={()=>{this.props.NextButton('friends')}} btnText='Go to Next Section'/>
            </div>
        );
    };
}

export default Footer;