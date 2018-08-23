import React from 'react';
import '../../css/Tile.css';


const Tile = ({btnText, bkg, click}) => {
    const styles = {
        backgroundImage: `url(${bkg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    return(
            <button onClick={click} style={styles} id='tile'>{`${btnText}`}</button>
    );
}


export default Tile;