import { Link } from 'react-router-dom';
import React from 'react';
import '../../../css/Button.css';

const StartButton = ({btnText, bkg, click, route, Classname}) => {
    const styles = {
        backgroundImage: `url(${bkg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    
    return <Link to={`${route}`}><button onClick={click} style={styles} className={`${Classname}`} id='startbtn'>{`${btnText}`}</button></Link>;
}


export default StartButton;