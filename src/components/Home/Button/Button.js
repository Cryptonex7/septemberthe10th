import React from 'react';
import '../../../css/Button.css';

const StartButton = ({btnText, bkg, click, Classname}) => {
    const styles = {
        backgroundImage: `url(${bkg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    
    return <button onClick={click} style={styles} className={`${Classname}`} id='startbtn'>{`${btnText}`}</button>;
}


export default StartButton;