import React from 'react';
import '../../../css/StartButton.css';


const StartButton = ({btnText, bkg, click}) => {
    const styles = {
        backgroundImage: `url(${bkg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    return(
            <button onClick={click} style={styles} id='startbtn'>{`${btnText}`}</button>
    );
}


export default StartButton;